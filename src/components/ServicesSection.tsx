
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

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <Card className={cn(
    "bg-card-gradient backdrop-blur-sm border border-trailblazery-blue/10 p-6 h-full",
    "hover:border-trailblazery-magenta/50 transition-all duration-300",
    className
  )}>
    <div className="mb-4 text-trailblazery-magenta">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      title: "International Tax Optimization",
      description: "Strategic tax planning across multiple jurisdictions to minimize liabilities and maximize advantages.",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Asset Protection",
      description: "Comprehensive solutions to safeguard your wealth and ensure long-term security.",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      title: "Investment Strategy",
      description: "Expert guidance on global investment opportunities aligned with your financial goals.",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      title: "Compliance Management",
      description: "Navigate complex international regulations with precision and confidence.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Corporate Structuring",
      description: "Optimize your business structure for maximum tax efficiency and operational flexibility.",
      icon: <Building className="h-8 w-8" />,
    },
    {
      title: "Wealth Management",
      description: "Personalized strategies for preserving and growing your wealth across generations.",
      icon: <CreditCard className="h-8 w-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Strategic Financial Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to optimize your international financial position and secure your future prosperity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
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
