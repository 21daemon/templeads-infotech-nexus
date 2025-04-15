
import React from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-luxury-950 to-black text-white relative overflow-hidden">
            {/* Background light beams */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/30 rounded-full blur-[80px] translate-y-1/4"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                    <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                            Ready for Premium Car Care?
                        </h2>
                        <p className="max-w-lg text-white/80 animate-slide-up animation-delay-100">
                            Book your appointment today and experience the luxury treatment your vehicle deserves. Our expert team is ready to transform your car.
                        </p>
                    </div>
                    <Link to="/booking">
                        <Button
                            size="lg"
                            className="bg-white hover:bg-white/90 text-black font-medium shadow-xl hover:shadow-white/20 animate-slide-up animation-delay-200 group transition-all duration-300 hover:-translate-y-1"
                        >
                            Book Your Appointment
                            <Zap className="ml-2 h-5 w-5 group-hover:scale-110 group-hover:text-amber-500 transition-all" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
