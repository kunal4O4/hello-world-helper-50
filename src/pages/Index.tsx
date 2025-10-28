import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/ExploreSection";
import Features from "@/components/Features";
import Events from "@/components/Events";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="explore">
          <ExploreSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="courses">
          <Courses />
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;