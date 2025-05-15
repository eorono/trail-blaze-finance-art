
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, we would handle the form submission here
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>
            <span className="text-gradient ml-2">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Schedule a consultation with our team of experts to begin your journey towards financial optimization and peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-trailblazery-blue/20 bg-trailblazery-dark/60 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-trailblazery-magenta" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-trailblazery-magenta" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Global Offices</p>
                    <p className="text-white">New York • Dubai • Limassol • Valletta • Andorra</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-trailblazery-blue/20 bg-gradient-to-br from-trailblazery-blue/10 to-trailblazery-magenta/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Financial Peace of Mind</h3>
              <p className="text-gray-300">
                Our team of experts is ready to help you navigate the complex world of international finance 
                and create a strategy tailored to your unique needs.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-3 rounded-lg border border-trailblazery-blue/20 bg-trailblazery-dark/60 backdrop-blur-sm p-6 lg:p-8">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="h-16 w-16 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-trailblazery-magenta" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Message Sent</h3>
                <p className="text-gray-300 max-w-md">
                  Thank you for reaching out. One of our financial experts will contact you shortly to 
                  discuss your unique situation and how we can help.
                </p>
                <Button 
                  className="mt-6 bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <Input 
                      className="bg-trailblazery-dark/40 border-trailblazery-blue/20 text-white focus-visible:ring-trailblazery-magenta" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                    <Input 
                      type="tel"
                      className="bg-trailblazery-dark/40 border-trailblazery-blue/20 text-white focus-visible:ring-trailblazery-magenta" 
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <Input 
                    className="bg-trailblazery-dark/40 border-trailblazery-blue/20 text-white focus-visible:ring-trailblazery-magenta" 
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <Textarea 
                    className="bg-trailblazery-dark/40 border-trailblazery-blue/20 text-white focus-visible:ring-trailblazery-magenta h-32" 
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="w-full md:w-auto bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
