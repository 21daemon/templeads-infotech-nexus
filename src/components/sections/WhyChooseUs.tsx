
import React from "react";
import { Check, Shield, Clock, CreditCard } from "lucide-react";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface WhyChooseUsProps {
    features: Feature[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ features }) => {
    return (
        <section className="py-24 bg-gradient-to-b from-secondary/40 to-background relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
                        The <span className="text-gradient">Autox24</span> Difference
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100 text-lg">
                        We're not just cleaning cars; we're providing an experience
                        that redefines what car care should be.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`glass-card p-8 hover-lift animate-slide-up animation-delay-${index * 100} transition-all duration-300 hover:border-primary/30 group`}
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
