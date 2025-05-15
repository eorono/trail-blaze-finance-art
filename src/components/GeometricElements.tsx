
import React from "react";
import { cn } from "@/lib/utils";

interface GeometricShapeProps {
  className?: string;
  animationDelay?: string;
}

export const GeometricTriangle: React.FC<GeometricShapeProps> = ({ 
  className, 
  animationDelay 
}) => {
  return (
    <div 
      className={cn(
        "absolute clip-triangle bg-gradient-to-br from-trailblazery-blue to-trailblazery-magenta opacity-20",
        "animate-float blur-md",
        className
      )}
      style={{ animationDelay }}
    />
  );
};

export const GeometricCircle: React.FC<GeometricShapeProps> = ({ 
  className, 
  animationDelay 
}) => {
  return (
    <div 
      className={cn(
        "absolute rounded-full bg-gradient-to-br from-trailblazery-magenta to-trailblazery-pink opacity-20",
        "animate-pulse-slow blur-md",
        className
      )}
      style={{ animationDelay }}
    />
  );
};

export const GeometricBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-trailblazery-dark" />
      
      <GeometricTriangle 
        className="h-96 w-96 -bottom-20 -left-20" 
        animationDelay="0s"
      />
      <GeometricTriangle 
        className="h-64 w-64 top-[20%] right-[10%] rotate-90" 
        animationDelay="1s"
      />
      <GeometricCircle 
        className="h-72 w-72 bottom-[30%] right-[5%]"
        animationDelay="0.5s"
      />
      <GeometricCircle 
        className="h-56 w-56 top-[10%] left-[15%]"
        animationDelay="1.5s"
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,0,51,0)_0,#160033_100%)]" />
    </div>
  );
};
