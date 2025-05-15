
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { logo: "h-8 w-8", text: "text-lg" },
    md: { logo: "h-10 w-10", text: "text-xl" },
    lg: { logo: "h-12 w-12", text: "text-2xl" },
    xl: { logo: "h-16 w-16", text: "text-3xl" },
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative", sizes[size].logo)}>
        {/* Geometric T logo with gradient */}
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M277 0H500V248H388V500H277V248V0Z"
            fill="url(#paint0_linear_logo)"
          />
          <path
            d="M0 0H223V112H112V500H0V112V0Z"
            fill="url(#paint1_linear_logo)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_logo"
              x1="277"
              y1="0"
              x2="500"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6012F5" />
              <stop offset="1" stopColor="#B510D3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_logo"
              x1="0"
              y1="0"
              x2="223"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6012F5" />
              <stop offset="1" stopColor="#A407E2" />
            </linearGradient>
          </defs>
        </svg>
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
