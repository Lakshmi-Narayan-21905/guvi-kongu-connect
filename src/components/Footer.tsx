import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const quickLinks = [
    { label: "About Program", href: "#about" },
    { label: "Courses", href: "#program" },
    { label: "Schedule", href: "#schedule" },
    { label: "Register", href: "#register" },
  ];

  const resources = [
    { label: "Student Portal", href: "#" },
    { label: "Learning Materials", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ];

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg gradient-bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg">G</span>
                </div>
                <span className="text-lg font-display font-bold">×</span>
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-display font-bold text-lg">K</span>
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Empowering the next generation of tech professionals through 
              industry-focused education and practical learning.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.1}>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Resources */}
          <ScrollReveal direction="up" delay={0.2}>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="up" delay={0.3}>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Kongu Engineering College<br />
                  Perundurai, Erode - 638060<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <motion.a
                  href="mailto:guvi-kec@kongu.edu"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  whileHover={{ x: 3 }}
                >
                  guvi-kec@kongu.edu
                </motion.a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <motion.a
                  href="tel:+914294225000"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  whileHover={{ x: 3 }}
                >
                  +91 4294 225 000
                </motion.a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2025 Guvi × Kongu Engineering College. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <motion.a 
                href="#" 
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
