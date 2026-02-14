import { Calendar, Clock, MapPin, Video } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Schedule = () => {
  const timeline = [
    {
      phase: "Phase 1",
      title: "Registration & Orientation",
      date: "Feb 15 - Feb 28, 2025",
      description: "Online registration, document verification, and virtual orientation sessions",
      icon: Calendar,
      status: "upcoming"
    },
    {
      phase: "Phase 2",
      title: "Foundation Courses",
      date: "Mar 1 - Apr 15, 2025",
      description: "Core programming fundamentals, problem-solving, and basic web technologies",
      icon: Clock,
      status: "upcoming"
    },
    {
      phase: "Phase 3",
      title: "Specialization Tracks",
      date: "Apr 16 - Jun 30, 2025",
      description: "Deep dive into chosen specialization with hands-on projects",
      icon: MapPin,
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "Capstone & Placement",
      date: "Jul 1 - Aug 15, 2025",
      description: "Final projects, mock interviews, and placement drives with partner companies",
      icon: Video,
      status: "upcoming"
    }
  ];

  return (
    <section id="schedule" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Timeline
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Program <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured 6-month journey designed to take you from fundamentals 
            to job-ready in your chosen domain.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">
                    {item.phase}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{item.date}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Icon Node */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <ScrollReveal delay={0.3} className="mt-20">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <h3 className="font-display font-bold text-2xl text-foreground text-center mb-8">
              Important Dates
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, date: "Feb 28, 2025", label: "Registration Deadline", color: "primary" },
                { icon: Video, date: "Mar 1, 2025", label: "Program Kickoff", color: "accent" },
                { icon: MapPin, date: "Aug 15, 2025", label: "Graduation Ceremony", color: "primary" },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <motion.div 
                    className="text-center p-6 bg-card rounded-2xl border border-border"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-12 h-12 rounded-full ${item.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.color === "primary" ? "text-primary" : "text-accent"}`} />
                    </div>
                    <p className="font-display font-bold text-lg text-foreground">{item.date}</p>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Schedule;
