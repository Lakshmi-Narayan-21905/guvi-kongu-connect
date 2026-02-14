import { Code, Database, Brain, Cloud, Shield, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const Program = () => {
  const courses = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Master React, Node.js, and modern web technologies",
      duration: "12 weeks",
      level: "Beginner to Advanced"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Learn Python, TensorFlow, and build AI applications",
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "SQL, Python, Power BI, and statistical analysis",
      duration: "8 weeks",
      level: "Beginner Friendly"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS, Azure, and DevOps practices",
      duration: "6 weeks",
      level: "Intermediate"
    },
    {
      icon: Shield,
      title: "Cybersecurity Essentials",
      description: "Network security, ethical hacking, and compliance",
      duration: "8 weeks",
      level: "All Levels"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "React Native and Flutter for cross-platform apps",
      duration: "10 weeks",
      level: "Intermediate"
    }
  ];

  return (
    <section id="program" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Course Catalog
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Programs Designed for the{" "}
            <span className="gradient-text">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our carefully curated selection of courses, each designed 
            to give you practical skills that employers are actively seeking.
          </p>
        </ScrollReveal>

        {/* Course Grid */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {courses.map((course, index) => (
            <StaggerItem key={index}>
              <Card className="group bg-card border-border card-hover cursor-pointer overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <course.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">{course.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Additional Info */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All courses include live sessions, recorded lectures, assignments, and certification
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Live Mentorship", "Industry Projects", "Placement Support", "Certification"].map((item, index) => (
              <ScrollReveal key={item} delay={0.4 + index * 0.1} direction="none">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}>
                  {item}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Program;
