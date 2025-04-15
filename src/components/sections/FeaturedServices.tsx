
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background light beams */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-luxury-500/20 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-luxury-300/10 rounded-full blur-[150px] translate-y-1/4"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
                        Premium Detail Packages
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100 text-lg">
                        Choose from our range of luxury car detailing services, each
                        designed to restore and protect your valuable vehicle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={service.title} className={`animate-blur-in animation-delay-${index * 100} relative group`}>
                            {service.popular && (
                                <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 flex items-center shadow-lg">
                                    <Sparkles className="h-3.5 w-3.5 mr-1 animate-pulse" /> 
                                    MOST POPULAR
                                </div>
                            )}
                            <ServiceCard
                                {...service}
                                className="transition-all duration-300 hover:border-primary/30 h-full"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/services">
                        <Button
                            variant="outline"
                            size="lg"
                            className="animate-fade-in animation-delay-500 hover-lift group border-primary/20 hover:border-primary/50 shadow-sm"
                        >
                            Explore All Services
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
