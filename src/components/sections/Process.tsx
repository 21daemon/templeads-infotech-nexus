
import React from "react";
import { Calendar, Car, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Process: React.FC = () => {
    const steps = [
        {
            icon: <Calendar className="h-8 w-8 text-primary" />,
            title: "Book Online",
            description: "Schedule your appointment through our easy online booking system."
        },
        {
            icon: <Car className="h-8 w-8 text-primary" />,
            title: "Drop Off",
            description: "Bring your vehicle to our facility or request our mobile service."
        },
        {
            icon: <CheckCircle className="h-8 w-8 text-primary" />,
            title: "Detailed Service",
            description: "Our expert team works their magic with premium products and techniques."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        Simple 3-Step Process
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        Getting your car detailed with us is quick and hassle-free. Here's how the process works.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <Card key={step.title} className="border shadow-md hover-lift transition-all duration-300 animate-fade-in animation-delay-200">
                            <CardContent className="pt-6">
                                <div className="mb-4 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                                        {step.icon}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-center">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                    
                    {/* Connecting arrows for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-1/3 w-1/6 h-0.5 bg-primary/30">
                        <ArrowRight className="absolute -right-3 -top-2 text-primary" />
                    </div>
                    <div className="hidden md:block absolute top-1/2 right-1/3 w-1/6 h-0.5 bg-primary/30">
                        <ArrowRight className="absolute -right-3 -top-2 text-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
