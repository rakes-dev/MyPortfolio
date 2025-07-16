import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">💼 Open for Opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Rakesh Sardar
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground">
                MCA Student & Aspiring Software Developer
              </p>
              
              <p className="text-lg text-foreground/80 max-w-lg">
                Passionate about building scalable web applications and backend systems. 
                Currently mastering modern technologies while seeking internship and full-time opportunities.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/rakes-dev" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/rakesh-sardar-763a40217/" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="rakesh374@outlook.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Developer workspace" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-tech-blue/20 rounded-full animate-float blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
