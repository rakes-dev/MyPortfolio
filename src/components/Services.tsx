import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingBag, Server, Wrench } from "lucide-react";

const Services = () => {
  const scrollToContact = (serviceName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Store the selected service for the contact form
      setTimeout(() => {
        const messageTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (messageTextarea && !messageTextarea.value) {
          messageTextarea.value = `Hi! I'm interested in your ${serviceName} service. Could you please provide more information?`;
          messageTextarea.focus();
        }
      }, 500);
    }
  };

  const services = [
    {
      title: "Web App Development",
      description: "Full-stack web applications with modern React frontends and robust backend systems.",
      features: [
        "React + TypeScript development",
        "Responsive design implementation",
        "API integration & development",
        "Database design & optimization",
        "Performance optimization"
      ],
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10",
      price: "Starting from $500"
    },
    {
      title: "Shopify Store Setup",
      description: "Complete e-commerce solutions with custom Shopify themes and functionality.",
      features: [
        "Custom theme development",
        "Store configuration",
        "Payment gateway integration",
        "Product catalog setup",
        "SEO optimization"
      ],
      icon: ShoppingBag,
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10",
      price: "Starting from $300"
    },
    {
      title: "Windows Server Management",
      description: "Professional server setup, configuration, and ongoing management services.",
      features: [
        "Server installation & configuration",
        "Active Directory setup",
        "DNS & DHCP configuration",
        "Failover cluster implementation",
        "Security hardening"
      ],
      icon: Server,
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10",
      price: "Starting from $200"
    },
    {
      title: "IT Support & Maintenance",
      description: "Ongoing technical support and system maintenance to keep your infrastructure running smoothly.",
      features: [
        "System monitoring & maintenance",
        "Performance optimization",
        "Security updates & patches",
        "Backup solutions",
        "Technical consultation"
      ],
      icon: Wrench,
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10",
      price: "Starting from $100/month"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From web development to system administration, I provide comprehensive technical solutions for your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center`}>
                    <service.icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Price</div>
                    <div className="font-semibold text-foreground">{service.price}</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 ${service.color} rounded-full mt-2 flex-shrink-0`} 
                             style={{ backgroundColor: `hsl(var(--${service.color.replace('text-', '')}))` }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => scrollToContact(service.title)}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">My Work Process</CardTitle>
              <p className="text-muted-foreground">How I deliver quality results for every project</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Discovery</h4>
                  <p className="text-sm text-muted-foreground">Understanding your requirements and goals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Planning</h4>
                  <p className="text-sm text-muted-foreground">Creating detailed project roadmap and timeline</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Development</h4>
                  <p className="text-sm text-muted-foreground">Building with best practices and regular updates</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Delivery</h4>
                  <p className="text-sm text-muted-foreground">Testing, deployment, and ongoing support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => scrollToContact("General Inquiry")}
                >
                  Get Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => scrollToContact("Consultation")}
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;