import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    course: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Registration Successful! 🎉",
      description: "We'll send you a confirmation email shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      course: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefitsList = [
    "No registration or course fees",
    "Limited seats available per batch",
    "Selection based on aptitude test",
    "Certificate of completion for all courses"
  ];

  return (
    <section id="register" className="py-20 md:py-32 gradient-bg-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
              Join Now
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Start Your Journey{" "}
              <span className="gradient-text">Today</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Take the first step towards a successful tech career. Register now 
              and get access to world-class education completely free of cost.
            </p>

            <ul className="space-y-4">
              {benefitsList.map((item, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1} direction="left">
                  <motion.li 
                    className="flex items-center gap-3 text-primary-foreground/80"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                </ScrollReveal>
              ))}
            </ul>
          </ScrollReveal>

          {/* Registration Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.div 
              className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Register for Free
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-1.5"
                  />
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="mt-1.5"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cse">Computer Science</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="ece">Electronics & Comm.</SelectItem>
                        <SelectItem value="eee">Electrical & Electronics</SelectItem>
                        <SelectItem value="mech">Mechanical</SelectItem>
                        <SelectItem value="civil">Civil</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year">Year of Study</Label>
                    <Select value={formData.year} onValueChange={(value) => handleChange("year", value)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="course">Preferred Course</Label>
                  <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">Full Stack Development</SelectItem>
                      <SelectItem value="aiml">AI & Machine Learning</SelectItem>
                      <SelectItem value="datascience">Data Science</SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Register Now
                        <ArrowRight className="ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Register;
