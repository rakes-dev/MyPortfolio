import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Code2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated computer science student with a passion for software development and a drive to create impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Education</h3>
              <div className="space-y-3 text-left">
                <div>
                  <h4 className="font-semibold text-primary">Master of Computer Applications</h4>
                  <p className="text-muted-foreground">Currently Pursuing • 2024-2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Computer Applications</h4>
                  <p className="text-muted-foreground">Completed • 2021-2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Goals */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Career Goals</h3>
              <div className="space-y-3 text-left text-muted-foreground">
                <p>• Build hands-on experience through internships</p>
                <p>• Work on scalable web applications</p>
                <p>• Develop expertise in backend systems</p>
                <p>• Open to full-time or part-time roles</p>
                <p>• Remote or hybrid opportunities</p>
              </div>
            </CardContent>
          </Card>

          {/* Approach */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-tech-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="h-8 w-8 text-tech-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">My Approach</h3>
              <div className="space-y-3 text-left text-muted-foreground">
                <p>• Problem-solving focused development</p>
                <p>• Quick adaptation to new technologies</p>
                <p>• Collaborative team environment</p>
                <p>• Continuous learning mindset</p>
                <p>• Real-world application focus</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Academic Excellence & Practical Experience</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Strong foundation in computer science, programming, and software engineering combined with 
                hands-on project experience. Currently deepening expertise in modern technologies like 
                Golang, React, and cloud technologies while building real-world applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;