
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Global Financial</span>
              <span className="block text-gradient">Strategy & Optimization</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Unlock international tax advantages and secure your financial future with personalized strategies across global jurisdictions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white px-8 py-6 text-lg"
                onClick={() => window.open('https://wa.me/34621425745', '_blank')}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-trailblazery-blue/30 to-trailblazery-magenta/30 rounded-full blur-3xl animate-pulse-slow" />
              <div className="h-full w-full rounded-full border-4 border-trailblazery-magenta/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="relative h-5/6 w-5/6 rounded-full bg-trailblazery-dark/60">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-trailblazery-blue blur-2xl opacity-30" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-trailblazery-magenta blur-2xl opacity-30" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-bold text-white mb-2">5+</div>
                      <div className="text-sm text-gray-300 text-center">Strategic Global<br/>Jurisdictions</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-6 h-12 w-12 rounded-full bg-trailblazery-blue/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold">USA</span>
                  </div>
                  
                  <div className="absolute top-12 right-8 h-12 w-12 rounded-full bg-trailblazery-magenta/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold">UAE</span>
                  </div>
                  
                  <div className="absolute bottom-12 right-10 h-12 w-12 rounded-full bg-trailblazery-pink/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold">MT</span>
                  </div>
                  
                  <div className="absolute bottom-8 left-10 h-12 w-12 rounded-full bg-trailblazery-blue/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold">CY</span>
                  </div>
                  
                  <div className="absolute top-1/2 left-10 h-12 w-12 rounded-full bg-purple-500/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold">AND</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-gradient-to-r from-trailblazery-blue/10 to-trailblazery-magenta/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
