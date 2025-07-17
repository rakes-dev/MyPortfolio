import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, Shield, Server } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce website for handmade goods with product pages, category filtering, and shopping cart functionality.",
      tech: ["React", "TypeScript", "Node.js", "MySQL"],
      features: [
        "Product catalog with filtering",
        "Shopping cart management",
        "Category-wise navigation",
        "Responsive design"
      ],
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/10",
      status: "In Development"
    },
    {
      title: "Password Validation System",
      description: "Integrated frontend validation with HENNGE API Challenge for secure password verification and authentication.",
      tech: ["JavaScript", "API Integration", "Frontend Validation"],
      features: [
        "Real-time password validation",
        "API integration",
        "Secure authentication flow",
        "User-friendly interface"
      ],
      icon: Shield,
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10",
      status: "Completed"
    },
    {
      title: "Windows Server Infrastructure",
      description: "Comprehensive server setup including failover clusters, NLB, DNS configuration, and Active Directory management.",
      tech: ["Windows Server 2019", "Active Directory", "DNS", "Networking"],
      features: [
        "Failover cluster implementation",
        "Network Load Balancing (NLB)",
        "DNS server configuration",
        "MSA (Managed Service Accounts)"
      ],
      icon: Server,
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10",
      status: "Completed"
    }
  ];

  const collaborationProjects = [
    {
      title: "Open Source Portfolio Template",
      description: "A modern, customizable portfolio template built with React and TypeScript. Looking for contributors to add new features and components.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      lookingFor: ["UI/UX designers", "Frontend developers", "Documentation writers"],
      difficulty: "Beginner-Friendly",
      icon: Github,
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10"
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Building a comprehensive analytics dashboard for e-commerce platforms. Need help with data visualization and API integrations.",
      tech: ["React", "Node.js", "Chart.js", "PostgreSQL"],
      lookingFor: ["Backend developers", "Data analysts", "Frontend developers"],
      difficulty: "Intermediate",
      icon: ShoppingCart,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Developer Community Platform",
      description: "Creating a platform for developers to share projects, find collaborators, and learn together. Perfect for full-stack enthusiasts.",
      tech: ["Next.js", "Supabase", "TypeScript", "Prisma"],
      lookingFor: ["Full-stack developers", "DevOps engineers", "Community managers"],
      difficulty: "Advanced",
      icon: Server,
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10"
    }
  ];

  const upcomingProjects = [
    "Golang REST API with microservices architecture",
    "React Native mobile app for portfolio showcase",
    "Cloud deployment with Docker containers",
    "Advanced authentication system with JWT"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey, from web applications to system administration projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                    <project.icon className={`h-6 w-6 ${project.color}`} />
                  </div>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects Ready to Collaborate */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
              Featured Projects Ready to Collaborate?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join me in building these exciting projects. Perfect opportunities to learn, contribute, and grow together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {collaborationProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 hover:shadow-glow transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                      <project.icon className={`h-6 w-6 ${project.color}`} />
                    </div>
                    <Badge variant="outline" className={`text-xs border-primary/30 ${
                      project.difficulty === "Beginner-Friendly" ? "text-green-600 border-green-300" :
                      project.difficulty === "Intermediate" ? "text-yellow-600 border-yellow-300" :
                      "text-red-600 border-red-300"
                    }`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Looking For */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Looking For</h4>
                    <ul className="space-y-1">
                      {project.lookingFor.map((role, roleIndex) => (
                        <li key={roleIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 ${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Collaboration Button */}
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-primary to-tech-blue hover:from-primary/90 hover:to-tech-blue/90">
                      Join This Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">What's Next?</CardTitle>
              <p className="text-muted-foreground">Upcoming projects and areas of exploration</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{project}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Collaborate?</h3>
              <p className="text-lg text-foreground/80 mb-6">
                I'm always excited to work on new projects and learn from experienced developers.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Let's Build Something Together
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;