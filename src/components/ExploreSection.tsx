import { useState, useEffect } from "react";
import { GraduationCap, Rocket, Target, Trophy, Star, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const offerings = [
  {
    id: "courses",
    icon: GraduationCap,
    emoji: "🎓",
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with hands-on projects and real-world applications",
    color: "from-blue-500 to-cyan-500",
    details: {
      highlights: [
        "Industry-expert instructors with 10+ years experience",
        "Hands-on projects for every module",
        "Real-world case studies and applications",
        "Flexible learning schedules",
        "Lifetime access to course materials"
      ],
      items: [
        "Full Stack Development Bootcamp",
        "AI & Machine Learning Mastery",
        "Cloud Architecture Professional",
        "Cybersecurity Specialist Training"
      ]
    }
  },
  {
    id: "domains",
    icon: Rocket,
    emoji: "🚀",
    title: "Technology Domains",
    description: "Master cutting-edge fields: AI, Web Dev, Blockchain, Cloud, Cybersecurity, and Data Science",
    color: "from-purple-500 to-pink-500",
    details: {
      highlights: [
        "6 comprehensive technology domains",
        "Latest tools and technologies",
        "Industry-relevant skill development",
        "Career-focused learning paths",
        "Expert mentorship in each domain"
      ],
      items: [
        "Artificial Intelligence & ML",
        "Web Development (Frontend & Backend)",
        "Blockchain & Crypto",
        "Cloud Computing (AWS, Azure, GCP)",
        "Cybersecurity & Ethical Hacking",
        "Data Science & Analytics"
      ]
    }
  },
  {
    id: "events",
    icon: Target,
    emoji: "🎯",
    title: "Live Events & Workshops",
    description: "Participate in hackathons, webinars, and interactive sessions with industry experts",
    color: "from-green-500 to-teal-500",
    details: {
      highlights: [
        "Monthly hackathons with prizes",
        "Weekly webinars with industry leaders",
        "Hands-on workshops every week",
        "Networking opportunities with peers",
        "Certificate for participation"
      ],
      items: [
        "AI Innovation Hackathon 2025",
        "Web3 Development Workshop",
        "Cloud Security Masterclass",
        "Data Science Competition"
      ]
    }
  },
  {
    id: "certifications",
    icon: Trophy,
    emoji: "🏆",
    title: "Industry Certifications",
    description: "Earn recognized certifications that boost your career and validate your skills",
    color: "from-orange-500 to-red-500",
    details: {
      highlights: [
        "Industry-recognized certificates",
        "Shareable digital credentials",
        "LinkedIn profile enhancement",
        "Portfolio-ready proof of skills",
        "Verified by industry partners"
      ],
      items: [
        "Professional Full Stack Developer",
        "Certified AI/ML Specialist",
        "Cloud Solutions Architect",
        "Cybersecurity Expert",
        "Blockchain Developer Professional"
      ]
    }
  },
  {
    id: "learning",
    icon: Star,
    emoji: "🌟",
    title: "Personalized Learning",
    description: "Follow customized learning paths tailored to your goals and skill level",
    color: "from-indigo-500 to-purple-500",
    details: {
      highlights: [
        "Personalized learning roadmaps",
        "Skill assessment and gap analysis",
        "Adaptive difficulty levels",
        "Progress tracking dashboard",
        "Customized recommendations"
      ],
      items: [
        "Beginner to Advanced paths",
        "Self-paced learning modules",
        "Interactive coding challenges",
        "Real-time progress analytics",
        "Personalized mentor guidance"
      ]
    }
  },
  {
    id: "career",
    icon: Briefcase,
    emoji: "💼",
    title: "Career Support",
    description: "Get mentorship, portfolio guidance, and industry connections for your tech career",
    color: "from-yellow-500 to-orange-500",
    details: {
      highlights: [
        "One-on-one career mentorship",
        "Resume and portfolio review",
        "Interview preparation sessions",
        "Industry networking events",
        "Job placement assistance"
      ],
      items: [
        "Career counseling sessions",
        "Portfolio development workshops",
        "Mock interview preparation",
        "LinkedIn profile optimization",
        "Industry referral network"
      ]
    }
  }
];

const ExploreSection = () => {
  const [activeSection, setActiveSection] = useState("courses");

  useEffect(() => {
    const handleScroll = () => {
      const sections = offerings.map(o => o.id);
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning ecosystem designed to transform beginners into industry-ready professionals
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <Card className="sticky top-24 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Our Offerings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {offerings.map((offering) => {
                  const isActive = activeSection === offering.id;
                  const OfferingIcon = offering.icon;
                  return (
                    <button
                      key={offering.id}
                      onClick={() => scrollToSection(offering.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left relative",
                        "hover:bg-muted/50",
                        isActive && "text-primary font-semibold"
                      )}
                    >
                      <OfferingIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{offering.title}</span>
                      {isActive && (
                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-primary" />
                      )}
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - All Offerings */}
          <div className="flex-1 space-y-8">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <Card key={offering.id} id={offering.id} className="shadow-elegant scroll-mt-24 animate-fade-in">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${offering.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-2">{offering.title}</CardTitle>
                        <p className="text-muted-foreground text-lg">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Key Highlights</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {offering.details.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        Featured {offering.id === "courses" ? "Courses" : 
                                 offering.id === "domains" ? "Domains" :
                                 offering.id === "events" ? "Upcoming Events" :
                                 offering.id === "certifications" ? "Certifications" :
                                 offering.id === "learning" ? "Features" : "Services"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {offering.details.items.map((item, idx) => (
                          <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
                            <p className="font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button className="bg-gradient-primary" asChild>
                        <a href="#get-started">Get Started</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="#about">Learn More</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;