
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "How long does a typical detail service take?",
            answer: "Our basic services typically take 2-3 hours, while premium detailing packages may take 4-6 hours. Ceramic coating applications generally require a full day as we need to properly prep the vehicle surface and allow for curing time."
        },
        {
            question: "Do I need to make an appointment?",
            answer: "Yes, we operate by appointment only to ensure each vehicle receives our full attention. You can easily book your appointment online or call us directly to schedule a time that works for you."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, digital payments through PayPal and Apple Pay, as well as cash. Payment is collected upon completion of service."
        },
        {
            question: "Do you offer mobile detailing services?",
            answer: "Yes, we offer mobile detailing within a 25-mile radius of our main location. A small travel fee may apply depending on your location."
        },
        {
            question: "How often should I get my car detailed?",
            answer: "For optimal results, we recommend a basic exterior and interior detail every 3-4 months. Ceramic coatings typically last 1-5 years depending on the package selected."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        Have questions about our services? Find answers to our most commonly asked questions below.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto animate-fade-in animation-delay-200">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
