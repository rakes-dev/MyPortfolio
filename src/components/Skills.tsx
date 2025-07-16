import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Java", "Python", "C", "Go (Golang)", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Development",
      icon: Code,
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10",
      skills: ["HTML5", "CSS3", "React", "TypeScript", "Vite", "Node.js", "API Integration"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10",
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "JSON"]
    },
    {
      title: "DevOps & Systems",
      icon: Server,
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10",
      skills: ["Docker", "Linux", "Windows Server", "Active Directory", "DNS", "Networking"]
    }
  ];

  const certifications = [
    "Data Structures & Algorithms with C",
    "Windows Server 2019 Administration",
    "Networking Concepts",
    "JSON Encoding/Decoding in Go"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set covering full-stack development, system administration, and modern DevOps practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Currently Learning */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Currently Mastering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Golang Development</h4>
                  <p className="text-muted-foreground">Learning thoroughly step-by-step with real-world use cases and examples</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Advanced React + TypeScript</h4>
                  <p className="text-muted-foreground">Building scalable applications with modern React patterns</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cloud Technologies</h4>
                  <p className="text-muted-foreground">Exploring containerization and cloud deployment strategies</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-tech-blue/5 border-tech-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tech-blue flex items-center gap-2">
                <Database className="h-6 w-6" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Technical Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Programming Languages</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-tech-blue mb-2">3+</div>
                  <p className="text-muted-foreground">Major Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-tech-orange mb-2">2+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;