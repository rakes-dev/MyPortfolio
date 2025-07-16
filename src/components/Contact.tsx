import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          email: data.email,
          message: data.message,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at sardar.rakesh@icloud.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send Me a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            rows={6}
                            className="bg-background border-border focus:border-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Get In Touch</CardTitle>
                <p className="text-muted-foreground">Prefer direct contact? Reach out through any of these channels.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">sardar.rakesh@icloud.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tech-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-tech-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Open to Remote & Hybrid Opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tech-orange/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-tech-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Response Time</h4>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Connect With Me</CardTitle>
                <p className="text-muted-foreground">Follow my journey and connect on social platforms.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start border-border hover:bg-primary/10">
                  <Github className="mr-3 h-5 w-5" />
                  GitHub - View My Code
                </Button>
                <Button variant="outline" className="w-full justify-start border-border hover:bg-tech-blue/10">
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn - Professional Profile
                </Button>
                <Button variant="outline" className="w-full justify-start border-border hover:bg-primary/10">
                  <Mail className="mr-3 h-5 w-5" />
                  Email - Direct Contact
                </Button>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-tech-blue/5 border-tech-blue/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-tech-blue">Current Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Internship Opportunities</span>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Freelance Projects</span>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Full-time Roles</span>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Consulting</span>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold">Available for immediate start</span> - 
                    Open to both remote and hybrid work arrangements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Start a Project?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether it's a simple website or a complex application, I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start a Project
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;