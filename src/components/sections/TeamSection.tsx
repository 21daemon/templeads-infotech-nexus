
import React from "react";
import { 
    Card, 
    CardContent
} from "@/components/ui/card";
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar";
import { 
    Facebook, 
    Instagram, 
    Linkedin 
} from "lucide-react";

const TeamSection: React.FC = () => {
    const team = [
        {
            name: "Michael Johnson",
            role: "Founder & Master Detailer",
            bio: "With over 15 years of experience in the automotive industry, Michael's passion for cars led him to create Autox24.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "Sarah Williams",
            role: "Head of Operations",
            bio: "Sarah ensures every detail experience exceeds customer expectations through her meticulous management.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "David Chen",
            role: "Paint Correction Specialist",
            bio: "David is our resident expert in paint restoration, certified in the latest correction techniques.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "Olivia Rodriguez",
            role: "Interior Restoration Expert",
            bio: "Olivia specializes in bringing worn interiors back to life with her attention to detail.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
            social: {
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            }
        }
    ];

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-4 animate-fade-in">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                        Meet The Experts
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
                        Our talented team of professionals brings years of experience and passion to every vehicle they touch.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <Card key={member.name} className="border hover-lift transition-all duration-300 animate-fade-in animation-delay-200">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                                
                                <div className="flex justify-center space-x-3">
                                    <a href={member.social.facebook} className="text-gray-400 hover:text-primary transition-colors">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href={member.social.instagram} className="text-gray-400 hover:text-primary transition-colors">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                    <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
