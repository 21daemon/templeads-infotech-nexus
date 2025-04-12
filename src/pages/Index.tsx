
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PageTransition from "@/components/transitions/PageTransition";
import { Check, Shield, Clock, CreditCard } from "lucide-react";

// Import all sections
import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Process from "@/components/sections/Process";
import Showcase from "@/components/sections/Showcase";
import FAQ from "@/components/sections/FAQ";
import TeamSection from "@/components/sections/TeamSection";

const Index: React.FC = () => {
    // Featured services
    const services = [
        {
            title: "Basic Wash",
            description:
                "Thorough exterior wash, wheel cleaning, and hand drying.",
            price: "$49.99",
            imageUrl: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
            popular: false,
        },
        {
            title: "Premium Detail",
            description:
                "Complete interior & exterior detail with hand wax finish.",
            price: "$99.99",
            imageUrl: "https://images.unsplash.com/photo-1622329821376-a19fd6002562?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            popular: true,
        },
        {
            title: "Ceramic Coating",
            description:
                "Professional-grade ceramic coating for long-lasting protection.",
            price: "$249.99",
            imageUrl: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
            popular: false,
        },
    ];

    // Reviews
    const reviews = [
        {
            name: "Michael Thompson",
            content: "Absolutely incredible service! My car looks better than when I bought it. The attention to detail is unmatched.",
            rating: 5,
        },
        {
            name: "Sarah Johnson",
            content: "I've tried multiple detailing services, and Autox24 stands above them all. Professional, thorough, and worth every penny.",
            rating: 5,
        },
        {
            name: "David Chen",
            content: "The ceramic coating has kept my car looking fantastic for months. Highly recommend their premium services.",
            rating: 5,
        },
    ];

    // Features
    const features = [
        {
            icon: <Check className="w-5 h-5" />,
            title: "Guaranteed Quality",
            description:
                "Every service comes with our satisfaction guarantee",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Premium Products",
            description:
                "We use only the highest quality cleaning products",
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Efficient Service",
            description: "Most services completed in under 2 hours",
        },
        {
            icon: <CreditCard className="w-5 h-5" />,
            title: "Easy Payment",
            description: "Secure payment options for your convenience",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <PageTransition>
                {/* Hero Section */}
                <Hero />

                {/* Process Section - How it works */}
                <Process />

                {/* Featured Services */}
                <FeaturedServices services={services} />

                {/* Showcase Section - Before & After */}
                <Showcase />

                {/* Why Choose Us */}
                <WhyChooseUs features={features} />

                {/* Team Section */}
                <TeamSection />

                {/* Testimonials */}
                <Testimonials reviews={reviews} />

                {/* FAQ Section */}
                <FAQ />

                {/* CTA */}
                <CTASection />
            </PageTransition>

            <Footer />
        </div>
    );
};

export default Index;
