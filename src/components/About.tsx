import { CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Industry-Aligned Curriculum",
      description: "Courses designed in collaboration with top tech companies to match real-world requirements."
    },
    {
      icon: Lightbulb,
      title: "Hands-On Learning",
      description: "Practical projects and live coding sessions to build actual portfolio-worthy work."
    },
    {
      icon: Rocket,
      title: "Career Acceleration",
      description: "Interview preparation, resume building, and direct connections with hiring partners."
    }
  ];

  const benefits = [
    "Certified courses recognized by industry leaders",
    "Mentorship from experienced professionals",
    "Access to exclusive job opportunities",
    "Lifetime access to learning materials",
    "Community support and networking",
    "Project-based assessments"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About The Program
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Partnership Built for{" "}
            <span className="gradient-text">Student Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Guvi's expertise in tech education combined with Kongu Engineering College's 
            academic excellence creates a unique learning experience that prepares students 
            for the challenges of tomorrow.
          </p>
        </ScrollReveal>

        {/* Partner Logos */}
        <ScrollReveal delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover">
            <div className="w-16 h-16 rounded-xl gradient-bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-2xl">G</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">Guvi</h3>
              <p className="text-sm text-muted-foreground">EdTech Leader</p>
            </div>
          </div>

          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-display font-bold text-2xl text-muted-foreground">×</span>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover">
            <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-2xl">K</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">Kongu Engineering College</h3>
              <p className="text-sm text-muted-foreground">Premier Institution</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerReveal className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group p-8 rounded-2xl bg-card border border-border card-hover h-full">
                <div className="w-14 h-14 rounded-xl gradient-bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Benefits List */}
        <ScrollReveal delay={0.1}>
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                  What You'll Get
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <ScrollReveal key={index} delay={index * 0.1} direction="left">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <ScrollReveal direction="right" delay={0.3}>
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full gradient-bg-primary opacity-20 absolute inset-0 blur-3xl" />
                    <div className="relative w-64 h-64 rounded-3xl gradient-bg-primary flex items-center justify-center">
                      <div className="text-center text-primary-foreground">
                        <span className="font-display text-5xl font-bold">100%</span>
                        <p className="text-lg mt-2 opacity-90">Free for Students</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
