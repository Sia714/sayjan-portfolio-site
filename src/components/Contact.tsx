
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here in a real application
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out with any questions, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-portfolio-blue to-portfolio-purple text-white p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-white/90" size={20} />
                    <a href="mailto:sayjan7777@gmail.com" className="hover:underline">
                      sayjan7777@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-white/90" size={20} />
                    <a href="tel:+919877542077" className="hover:underline">
                      +91-9877542077
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="text-white/90" size={20} />
                    <span>Punjab, India</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/sayjan-j-singh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/Sia714" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="mailto:sayjan7777@gmail.com"
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-white p-6 md:p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="w-full h-32"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
