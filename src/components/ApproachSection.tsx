
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We begin with a comprehensive evaluation of your financial situation, goals, and challenges to establish a clear baseline."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Our experts develop tailored strategies across jurisdictions, highlighting opportunities for optimization and protection."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute your customized plan with precision, handling all technical requirements and ensuring compliance."
    },
    {
      number: "04",
      title: "Ongoing Management",
      description: "Our relationship continues with regular reviews and adjustments as markets evolve and your needs change."
    }
  ];

  return (
    <section id="approach" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>
              <span className="text-gradient ml-2">Methodology</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              We apply a systematic, proven approach to optimize your international financial position while ensuring security, compliance, and peace of mind.
            </p>
            
            <div className="mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex mb-8 last:mb-0">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-sm bg-gradient-to-br from-trailblazery-blue to-trailblazery-magenta flex items-center justify-center font-mono text-white">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white">
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 backdrop-blur rounded-lg overflow-hidden border border-trailblazery-blue/20">
              <div className="aspect-[4/5] relative overflow-hidden bg-trailblazery-dark/60">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[110%] w-[110%] rounded-full bg-gradient-to-br from-trailblazery-blue/20 to-trailblazery-magenta/20 absolute animate-pulse-slow" />
                </div>

                <div className="relative z-10 h-full w-full p-8 flex flex-col">
                  <div className="mb-auto pb-8">
                    <div className="inline-block px-4 py-2 rounded-full bg-trailblazery-magenta/20 text-sm text-trailblazery-pink mb-6">
                      Personalized Approach
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      Your Financial Peace of Mind is Our Priority
                    </h3>
                    <p className="text-gray-300">
                      We develop strategies as unique as you are, addressing your specific needs while maximizing opportunities.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-trailblazery-dark/80 border border-trailblazery-blue/20">
                      <div className="text-3xl font-bold text-trailblazery-magenta mb-2">100%</div>
                      <div className="text-sm text-gray-300">Personalized Solutions</div>
                    </div>
                    <div className="p-4 rounded-lg bg-trailblazery-dark/80 border border-trailblazery-blue/20">
                      <div className="text-3xl font-bold text-trailblazery-magenta mb-2">15+</div>
                      <div className="text-sm text-gray-300">Years of Expertise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 h-40 w-40 bg-trailblazery-blue/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 h-40 w-40 bg-trailblazery-magenta/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
