
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">{t.contact.title}</span>
            <span className="text-gradient ml-2">{t.contact.subtitle}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-trailblazery-blue/20 bg-trailblazery-dark/60 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold mb-6 text-white">{t.contact.info}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-trailblazery-magenta" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.contact.phone}</p>
                  <p className="text-white">+34 621425745</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-trailblazery-magenta" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.contact.offices}</p>
                  <p className="text-white">{t.contact.officesList}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-trailblazery-blue/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{t.contact.peaceTitle}</h3>
                  <p className="text-gray-300 mt-2">
                    {t.contact.peaceText}
                  </p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white"
                  onClick={() => window.open('https://wa.me/34621425745', '_blank')}
                >
                  {t.contact.cta}
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
