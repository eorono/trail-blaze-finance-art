
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
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
        
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-trailblazery-blue/20 bg-trailblazery-dark/60 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-trailblazery-magenta" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="text-white">+34 621425745</p>
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
            
            <div className="mt-8 pt-8 border-t border-trailblazery-blue/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Financial Peace of Mind</h3>
                  <p className="text-gray-300 mt-2">
                    Our team of experts is ready to help you navigate the complex world of international finance.
                  </p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
