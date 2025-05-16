
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage, LanguageCode } from '@/i18n/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: LanguageCode; label: keyof typeof t.languageSelector }[] = [
    { code: 'en', label: 'en' },
    { code: 'es', label: 'es' },
    { code: 'fr', label: 'fr' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-2 text-white hover:text-trailblazery-pink transition-colors">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-trailblazery-dark/90 backdrop-blur-md border-trailblazery-blue/20">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`text-white hover:bg-trailblazery-blue/20 cursor-pointer ${
              language === lang.code ? 'text-trailblazery-magenta' : ''
            }`}
          >
            {t.languageSelector[lang.label]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
