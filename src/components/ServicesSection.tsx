
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Building, 
  CreditCard 
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
}

const ServiceCard = ({ title, description, icon, className, delay = '' }: ServiceCardProps) => (
  <Card className={cn(
    "bg-card-gradient backdrop-blur-sm border border-trailblazery-blue/10 p-6 h-full",
    "hover:border-trailblazery-magenta/50 transition-all duration-300 animate-on-scroll",
    className,
    delay
  )}>
    <div className="mb-4 text-trailblazery-magenta">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </Card>
);

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t.services.international.title,
      description: t.services.international.description,
      icon: <Globe className="h-8 w-8" />,
      delay: 'delay-100'
    },
    {
      title: t.services.asset.title,
      description: t.services.asset.description,
      icon: <ShieldCheck className="h-8 w-8" />,
      delay: 'delay-200'
    },
    {
      title: t.services.investment.title,
      description: t.services.investment.description,
      icon: <TrendingUp className="h-8 w-8" />,
      delay: 'delay-300'
    },
    {
      title: t.services.compliance.title,
      description: t.services.compliance.description,
      icon: <FileText className="h-8 w-8" />,
      delay: 'delay-100'
    },
    {
      title: t.services.corporate.title,
      description: t.services.corporate.description,
      icon: <Building className="h-8 w-8" />,
      delay: 'delay-200'
    },
    {
      title: t.services.wealth.title,
      description: t.services.wealth.description,
      icon: <CreditCard className="h-8 w-8" />,
      delay: 'delay-300'
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t.services.title}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full max-h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-trailblazery-blue/5 to-trailblazery-magenta/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default ServicesSection;
