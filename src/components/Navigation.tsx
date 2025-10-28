import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "@/components/AuthModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["home", "explore", "about", "features", "events", "courses"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">RR</span>
            </div>
            <span className="text-xl font-bold gradient-text">Ravi Rautela</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`text-foreground/80 hover:text-primary transition-colors relative pb-2 ${
                    activeSection === "home" ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#000000] after:content-['']" : ""
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className={`text-foreground/80 hover:text-primary transition-colors relative pb-2 ${
                    activeSection === "features" ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#000000] after:content-['']" : ""
                  }`}
                >
                  What We Provide
                </button>
                <button
                  onClick={() => scrollToSection("events")}
                  className={`text-foreground/80 hover:text-primary transition-colors relative pb-2 ${
                    activeSection === "events" ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#000000] after:content-['']" : ""
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => scrollToSection("courses")}
                  className={`text-foreground/80 hover:text-primary transition-colors relative pb-2 ${
                    activeSection === "courses" ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#000000] after:content-['']" : ""
                  }`}
                >
                  Courses
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/events" className="text-foreground/80 hover:text-primary transition-colors">
                  Events
                </Link>
                <Link to="/innovators-route" className="text-foreground/80 hover:text-primary transition-colors">
                  Innovator's Route
                </Link>
                <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/portfolio" className="text-foreground/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setIsAuthModalOpen(true)}>
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-primary" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {isHomePage ? (
              <>
                <button
                  onClick={() => {
                    scrollToSection("home");
                    setIsMenuOpen(false);
                  }}
                  className={`block text-foreground/80 hover:text-primary transition-colors w-full text-left ${
                    activeSection === "home" ? "border-b-2 border-[#000000] pb-1" : ""
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection("features");
                    setIsMenuOpen(false);
                  }}
                  className={`block text-foreground/80 hover:text-primary transition-colors w-full text-left ${
                    activeSection === "features" ? "border-b-2 border-[#000000] pb-1" : ""
                  }`}
                >
                  What We Provide
                </button>
                <button
                  onClick={() => {
                    scrollToSection("events");
                    setIsMenuOpen(false);
                  }}
                  className={`block text-foreground/80 hover:text-primary transition-colors w-full text-left ${
                    activeSection === "events" ? "border-b-2 border-[#000000] pb-1" : ""
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => {
                    scrollToSection("courses");
                    setIsMenuOpen(false);
                  }}
                  className={`block text-foreground/80 hover:text-primary transition-colors w-full text-left ${
                    activeSection === "courses" ? "border-b-2 border-[#000000] pb-1" : ""
                  }`}
                >
                  Courses
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/events"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  to="/innovators-route"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Innovator's Route
                </Link>
                <Link
                  to="/about"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/portfolio"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </>
            )}
            <div className="flex flex-col space-y-2 pt-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-primary"
                asChild
              >
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
};

export default Navigation;
