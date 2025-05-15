
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { logo: "h-8", text: "text-lg" },
    md: { logo: "h-10", text: "text-xl" },
    lg: { logo: "h-12", text: "text-2xl" },
    xl: { logo: "h-16", text: "text-3xl" },
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative", sizes[size].logo)}>
        <img 
          src="/lovable-uploads/c58319f3-e818-47bd-9a18-276cfd1b0a8d.png" 
          alt="Trailblazery Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
      
      {showText && (
        <span className={cn("font-bold text-white", sizes[size].text)}>
          Trailblazery
        </span>
      )}
    </div>
  );
};

export default Logo;
