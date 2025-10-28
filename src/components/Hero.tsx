import heroBackground from "@/assets/hero-background.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        {/* Bottom fog overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-white">Connect Learn</span>
            <br />
            <span className="text-foreground">Grow</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90">
            Explore the best version of yours
          </p>
          
          {/* Button */}
          <Button 
            onClick={scrollToNext}
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 mt-8 px-8 py-6 text-lg rounded-full"
          >
            Explore Gallery
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;