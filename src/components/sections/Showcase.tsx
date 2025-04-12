
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Showcase: React.FC = () => {
    // Before & After images
    const transformations = [
        {
            id: 1,
            title: "Luxury Sedan Restoration",
            beforeImage: "https://images.unsplash.com/photo-1553083024-7f2fb6c6be3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            afterImage: "https://images.unsplash.com/photo-1605515298946-5774dcf91b70?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3",
            description: "Complete interior and exterior detail including paint correction."
        },
        {
            id: 2,
            title: "SUV Interior Revival",
            beforeImage: "https://images.unsplash.com/photo-1574361589233-a0a8b671fa8e?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3",
            afterImage: "https://images.unsplash.com/photo-1605515298946-5774dcf91b70?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3",
            description: "Deep cleaning, conditioning, and protection of all interior surfaces."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Before & After
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        See The Transformation
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        Our work speaks for itself. Check out these dramatic transformations from our recent projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {transformations.map((item, index) => (
                        <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md animate-fade-in animation-delay-200">
                            <div className="grid grid-cols-2 gap-2 p-2">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <AspectRatio ratio={4/3} className="bg-muted rounded-md overflow-hidden">
                                            <img 
                                                src={item.beforeImage} 
                                                alt={`${item.title} before`} 
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                                Before
                                            </div>
                                        </AspectRatio>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <AspectRatio ratio={4/3} className="bg-muted rounded-md overflow-hidden">
                                            <img 
                                                src={item.afterImage} 
                                                alt={`${item.title} after`}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                                                After
                                            </div>
                                        </AspectRatio>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground mb-4">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/gallery">
                        <Button className="group hover-lift animate-fade-in animation-delay-300">
                            View Full Gallery
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
