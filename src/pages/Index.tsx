import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Schedule from "@/components/Schedule";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Schedule />
        <Register />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
