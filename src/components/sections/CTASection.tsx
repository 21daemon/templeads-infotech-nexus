
import React from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                            Ready to Transform Your Car?
                        </h2>
                        <p className="max-w-lg opacity-90 animate-slide-up animation-delay-100">
                            Book your appointment today and experience the
                            premium car care that's setting a new standard.
                        </p>
                    </div>
                    <Link to="/booking">
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover-lift animate-slide-up animation-delay-200 group"
                        >
                            Book Now
                            <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
