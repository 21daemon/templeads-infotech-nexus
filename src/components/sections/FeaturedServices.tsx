
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

interface FeaturedServicesProps {
    services: {
        title: string;
        description: string;
        price: string;
        imageUrl: string;
        popular: boolean;
    }[];
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ services }) => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        Detail Packages for Every Need
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        Choose from our range of premium car detailing services, each
                        designed to restore and protect your vehicle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            className={`animate-blur-in animation-delay-${index * 100}`}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/services">
                        <Button
                            variant="outline"
                            size="lg"
                            className="animate-fade-in animation-delay-500 hover-lift group"
                        >
                            View All Services
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
