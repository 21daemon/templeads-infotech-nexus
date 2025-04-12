
import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format, startOfMonth, subMonths, differenceInDays, isAfter, subDays, parseISO } from "date-fns";
import { 
  Calendar, 
  ChartBar, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  Star,
  Smile,
  ThumbsUp,
  ThumbsDown,
  PieChart as PieChartIcon, // Import PieChart icon from lucide-react
} from "lucide-react";

// Types for our analytics data
interface BookingData {
  id: string;
  date: string;
  service_name: string;
  price: string;
  car_make: string;
  car_model: string;
  time_slot: string;
  status: string;
  created_at: string;
}

interface FeedbackData {
  id: string;
  rating: number;
  created_at: string;
  message: string;
  satisfaction?: string;
}

interface DataAnalyticsProps {
  bookings: BookingData[];
  feedback: FeedbackData[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const DataAnalytics: React.FC<DataAnalyticsProps> = ({ bookings, feedback }) => {
  // Process booking data for visualizations
  const bookingsByService = useMemo(() => {
    const serviceCount: Record<string, number> = {};
    
    bookings.forEach(booking => {
      const service = booking.service_name;
      serviceCount[service] = (serviceCount[service] || 0) + 1;
    });
    
    return Object.entries(serviceCount).map(([name, value]) => ({ name, value }));
  }, [bookings]);

  // Process booking data by month
  const bookingsByMonth = useMemo(() => {
    const monthlyData: Record<string, number> = {};
    const now = new Date();
    
    // Initialize last 6 months
    for (let i = 5; i >= 0; i--) {
      const monthDate = subMonths(startOfMonth(now), i);
      const monthKey = format(monthDate, 'MMM yyyy');
      monthlyData[monthKey] = 0;
    }
    
    // Count bookings by month
    bookings.forEach(booking => {
      const bookingDate = new Date(booking.created_at);
      const monthKey = format(bookingDate, 'MMM yyyy');
      if (monthlyData[monthKey] !== undefined) {
        monthlyData[monthKey]++;
      }
    });
    
    return Object.entries(monthlyData).map(([month, count]) => ({
      month,
      bookings: count
    }));
  }, [bookings]);

  // Process car makes data
  const carMakesData = useMemo(() => {
    const carMakesCount: Record<string, number> = {};
    
    bookings.forEach(booking => {
      const make = booking.car_make || 'Unknown';
      carMakesCount[make] = (carMakesCount[make] || 0) + 1;
    });
    
    return Object.entries(carMakesCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5); // Top 5 car makes
  }, [bookings]);

  // Fix for time slot sorting with proper type handling
  const bookingsByTimeSlot = useMemo(() => {
    const timeSlotCount: Record<string, number> = {};
    
    bookings.forEach(booking => {
      const timeSlot = booking.time_slot;
      if (timeSlot) { // Make sure timeSlot exists
        timeSlotCount[timeSlot] = (timeSlotCount[timeSlot] || 0) + 1;
      }
    });
    
    return Object.entries(timeSlotCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => {
        // Properly type and handle the name values
        const timeA = typeof a.name === 'string' ? a.name.split(' - ')[0] : '';
        const timeB = typeof b.name === 'string' ? b.name.split(' - ')[0] : '';
        return timeA.localeCompare(timeB);
      });
  }, [bookings]);

  // Calculate revenue by month
  const revenueByMonth = useMemo(() => {
    const monthlyRevenue: Record<string, number> = {};
    const now = new Date();
    
    // Initialize last 6 months
    for (let i = 5; i >= 0; i--) {
      const monthDate = subMonths(startOfMonth(now), i);
      const monthKey = format(monthDate, 'MMM yyyy');
      monthlyRevenue[monthKey] = 0;
    }
    
    // Count revenue by month
    bookings.forEach(booking => {
      const bookingDate = new Date(booking.created_at);
      const monthKey = format(bookingDate, 'MMM yyyy');
      if (monthlyRevenue[monthKey] !== undefined) {
        // Remove '$' and convert to number
        const price = parseFloat(booking.price.replace(/[$,]/g, ''));
        if (!isNaN(price)) {
          monthlyRevenue[monthKey] += price;
        }
      }
    });
    
    return Object.entries(monthlyRevenue).map(([month, revenue]) => ({
      month,
      revenue
    }));
  }, [bookings]);

  // Calculate recent booking trend (last 14 days)
  const recentBookingTrend = useMemo(() => {
    const dailyBookings: Record<string, number> = {};
    const now = new Date();
    
    // Initialize last 14 days
    for (let i = 13; i >= 0; i--) {
      const day = subDays(now, i);
      const dayKey = format(day, 'MMM dd');
      dailyBookings[dayKey] = 0;
    }
    
    // Count bookings by day
    bookings.forEach(booking => {
      try {
        const bookingDate = parseISO(booking.created_at);
        if (differenceInDays(now, bookingDate) <= 14) {
          const dayKey = format(bookingDate, 'MMM dd');
          if (dailyBookings[dayKey] !== undefined) {
            dailyBookings[dayKey]++;
          }
        }
      } catch (e) {
        // Skip invalid dates
      }
    });
    
    return Object.entries(dailyBookings).map(([day, count]) => ({
      day,
      bookings: count
    }));
  }, [bookings]);

  // Process feedback ratings
  const feedbackRatings = useMemo(() => {
    const ratings: Record<number, number> = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    
    feedback.forEach(item => {
      if (item.rating >= 1 && item.rating <= 5) {
        ratings[item.rating]++;
      }
    });
    
    return Object.entries(ratings).map(([rating, count]) => ({
      rating: `${rating} Star${parseInt(rating) !== 1 ? 's' : ''}`,
      count
    }));
  }, [feedback]);

  // Feedback sentiment analysis
  const feedbackSentiment = useMemo(() => {
    const sentimentData = [
      { name: 'Positive', value: 0 },
      { name: 'Neutral', value: 0 },
      { name: 'Negative', value: 0 }
    ];
    
    feedback.forEach(item => {
      if (item.rating >= 4) {
        sentimentData[0].value++; // Positive
      } else if (item.rating === 3) {
        sentimentData[1].value++; // Neutral
      } else {
        sentimentData[2].value++; // Negative
      }
    });
    
    return sentimentData;
  }, [feedback]);

  // Feedback trends over time
  const feedbackTrendsByMonth = useMemo(() => {
    const monthlyData: Record<string, { count: number, total: number }> = {};
    const now = new Date();
    
    // Initialize last 6 months
    for (let i = 5; i >= 0; i--) {
      const monthDate = subMonths(startOfMonth(now), i);
      const monthKey = format(monthDate, 'MMM yyyy');
      monthlyData[monthKey] = { count: 0, total: 0 };
    }
    
    // Accumulate ratings by month
    feedback.forEach(item => {
      try {
        const feedbackDate = parseISO(item.created_at);
        const monthKey = format(feedbackDate, 'MMM yyyy');
        if (monthlyData[monthKey] !== undefined) {
          monthlyData[monthKey].count++;
          monthlyData[monthKey].total += item.rating;
        }
      } catch (e) {
        // Skip invalid dates
      }
    });
    
    return Object.entries(monthlyData).map(([month, data]) => ({
      month,
      avgRating: data.count > 0 ? (data.total / data.count).toFixed(1) : "0"
    }));
  }, [feedback]);

  // Feedback satisfaction categories
  const feedbackSatisfactionTypes = useMemo(() => {
    const satisfactionCount: Record<string, number> = {
      "Excellent": 0,
      "Good": 0,
      "Average": 0,
      "Poor": 0,
      "Unknown": 0
    };
    
    feedback.forEach(item => {
      if (item.satisfaction) {
        satisfactionCount[item.satisfaction] = (satisfactionCount[item.satisfaction] || 0) + 1;
      } else {
        satisfactionCount["Unknown"]++;
      }
    });
    
    return Object.entries(satisfactionCount)
      .map(([name, value]) => ({ name, value }))
      .filter(item => item.value > 0); // Only include categories with data
  }, [feedback]);

  // Calculate average rating
  const averageRating = useMemo(() => {
    if (feedback.length === 0) return 0;
    
    const sum = feedback.reduce((acc, item) => acc + item.rating, 0);
    return (sum / feedback.length).toFixed(1);
  }, [feedback]);

  const chartConfig = {
    services: { label: "Services" },
    bookings: { label: "Bookings" },
    ratings: { label: "Ratings" },
    cars: { label: "Car Makes" },
    revenue: { label: "Revenue" },
    sentiment: { label: "Sentiment" },
    timeSlot: { label: "Time Slots" },
    satisfaction: { label: "Satisfaction" },
  };

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              Total Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookings.length}</div>
            <p className="text-xs text-muted-foreground">
              Lifetime bookings
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" />
              Unique Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookingsByService.length}</div>
            <p className="text-xs text-muted-foreground">
              Different service types
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Total Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedback.length}</div>
            <p className="text-xs text-muted-foreground">
              Customer reviews received
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4" />
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">⭐ {averageRating}</div>
            <p className="text-xs text-muted-foreground">
              Out of 5 stars
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="bookings" className="w-full">
        <TabsList>
          <TabsTrigger value="bookings">Booking Analysis</TabsTrigger>
          <TabsTrigger value="feedback">Feedback Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bookings" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5" />
                  Bookings by Service
                </CardTitle>
                <CardDescription>Distribution of bookings by service type</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <PieChart>
                    <Pie
                      data={bookingsByService}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {bookingsByService.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Monthly Bookings
                </CardTitle>
                <CardDescription>Booking trend over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <LineChart data={bookingsByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bookings"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBar className="h-5 w-5" />
                  Top Car Makes
                </CardTitle>
                <CardDescription>Most common car makes in bookings</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <BarChart data={carMakesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="value" name="Count" fill="#82ca9d" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Popular Time Slots
                </CardTitle>
                <CardDescription>Most requested appointment times</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <BarChart data={bookingsByTimeSlot} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="value" name="Bookings" fill="#8884d8" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Monthly Revenue
                </CardTitle>
                <CardDescription>Revenue trend over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <AreaChart data={revenueByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      name="Revenue ($)" 
                      fill="#00C49F" 
                      stroke="#00C49F"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recent Booking Trend
                </CardTitle>
                <CardDescription>Daily bookings over the last 14 days</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <LineChart data={recentBookingTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bookings"
                      stroke="#FF8042"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="feedback" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Feedback Ratings
                </CardTitle>
                <CardDescription>Distribution of customer ratings</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <BarChart data={feedbackRatings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="count" name="Number of Ratings" fill="#8884d8" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smile className="h-5 w-5" />
                  Sentiment Analysis
                </CardTitle>
                <CardDescription>Positive vs. negative feedback</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <PieChart>
                    <Pie
                      data={feedbackSentiment}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      <Cell fill="#82ca9d" /> {/* Positive */}
                      <Cell fill="#FFBB28" /> {/* Neutral */}
                      <Cell fill="#FF8042" /> {/* Negative */}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Rating Trends
                </CardTitle>
                <CardDescription>Average rating by month</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <LineChart data={feedbackTrendsByMonth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="avgRating"
                      name="Average Rating"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5" />
                  Satisfaction Categories
                </CardTitle>
                <CardDescription>Breakdown of satisfaction responses</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer config={chartConfig}>
                  <BarChart data={feedbackSatisfactionTypes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="value" name="Count" fill="#00C49F" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataAnalytics;
