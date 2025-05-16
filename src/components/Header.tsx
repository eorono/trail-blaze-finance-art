
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Implementar scroll suave para los enlaces de navegación
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset para la barra de navegación
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-trailblazery-dark/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container flex justify-between items-center">
        <Logo size={scrolled ? "md" : "xl"} />
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-trailblazery-pink transition-colors"
          >
            {t.nav.services}
          </button>
          <button 
            onClick={() => scrollToSection('global')} 
            className="text-white hover:text-trailblazery-pink transition-colors"
          >
            {t.nav.globalReach}
          </button>
          <button 
            onClick={() => scrollToSection('approach')} 
            className="text-white hover:text-trailblazery-pink transition-colors"
          >
            {t.nav.approach}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-trailblazery-pink transition-colors"
          >
            {t.nav.contact}
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Button 
            className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white"
            onClick={() => window.open('https://wa.me/34621425745', '_blank')}
          >
            {t.header.getStarted}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
