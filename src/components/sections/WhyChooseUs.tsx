
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
        <section className="py-20 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        The Autox24 Difference
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        We're not just cleaning cars; we're providing an experience
                        that redefines what car care should be.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`p-6 border rounded-xl bg-white shadow-sm hover-lift animate-slide-up animation-delay-${index * 100}`}
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-medium mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
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
