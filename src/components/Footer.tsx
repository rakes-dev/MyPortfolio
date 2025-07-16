import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Rakesh Sardar
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              MCA student passionate about creating innovative software solutions. 
              Always ready to take on new challenges and learn cutting-edge technologies.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills & Expertise
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Featured Projects
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: sardar.rakesh@icloud.com</p>
              <p>Available for: Internships, Full-time, Freelance</p>
              <p>Response time: Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Rakesh Sardar. Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>using React & TypeScript</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Open for opportunities • Ready to start immediately
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;