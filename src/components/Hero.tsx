import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-bg-hero overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center py-12">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
              <motion.span 
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-primary-foreground/90">
                Registrations Open for 2025
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-5xl"
          >
            Empowering Students with{" "}
            <span className="gradient-text">Industry-Ready Skills</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl"
          >
            A transformative collaboration between <strong className="text-primary-foreground">Guvi</strong> and{" "}
            <strong className="text-primary-foreground">Kongu Engineering College</strong> to bridge 
            the gap between academic learning and industry demands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Button variant="accent" size="xl" className="group">
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-light" size="xl">
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/10"
          >
            {[
              { icon: Users, value: "500+", label: "Students Enrolled" },
              { icon: BookOpen, value: "20+", label: "Courses Offered" },
              { icon: Award, value: "95%", label: "Placement Rate" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-accent mr-2" />
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{stat.value}</span>
                </div>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 100V50C240 16.67 480 0 720 0C960 0 1200 16.67 1440 50V100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
