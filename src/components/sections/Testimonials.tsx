
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Review {
    name: string;
    content: string;
    rating: number;
}

interface TestimonialsProps {
    reviews: Review[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ reviews }) => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        Don't just take our word for it—hear from customers who've
                        experienced the Autox24 difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={review.name}
                            className={`p-6 border rounded-xl bg-white shadow-sm animate-blur-in animation-delay-${index * 100}`}
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-sm mb-4 italic">
                                "{review.content}"
                            </p>
                            <p className="text-sm font-medium">
                                {review.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/feedback">
                        <Button
                            variant="outline"
                            size="lg"
                            className="animate-fade-in animation-delay-500 hover-lift"
                        >
                            Read More Reviews
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
