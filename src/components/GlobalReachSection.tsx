
import { Card } from "@/components/ui/card";

const GlobalReachSection = () => {
  const locations = [
    {
      country: "United States",
      code: "USA",
      benefits: ["Stable investment environment", "World-class banking infrastructure", "Diverse market opportunities"],
      color: "from-blue-600 to-blue-800"
    },
    {
      country: "Dubai",
      code: "UAE",
      benefits: ["Tax-free income", "Strategic location", "Business-friendly regulations"],
      color: "from-amber-500 to-red-600"
    },
    {
      country: "Cyprus",
      code: "CY",
      benefits: ["EU membership benefits", "Attractive tax incentives", "Investment opportunities"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      country: "Malta",
      code: "MT",
      benefits: ["EU financial passporting", "Double tax treaties", "Attractive corporate structures"],
      color: "from-red-600 to-red-800"
    },
    {
      country: "Andorra",
      code: "AND",
      benefits: ["Low tax jurisdiction", "Personal privacy", "Political stability"],
      color: "from-blue-600 to-amber-600"
    }
  ];

  return (
    <section id="global" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Global</span>
            <span className="text-gradient ml-2">Network</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Strategic presence across key international financial centers, providing comprehensive solutions tailored to your unique needs.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden border border-trailblazery-blue/20 bg-trailblazery-dark/60 backdrop-blur-sm">
                <div className={`h-2 w-full bg-gradient-to-r ${location.color}`} />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{location.country}</h3>
                    <span className="text-sm font-mono bg-trailblazery-blue/20 px-2 py-1 rounded text-trailblazery-magenta">
                      {location.code}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {location.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-trailblazery-magenta mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6012F5" />
                  <stop offset="100%" stopColor="#A407E2" />
                </linearGradient>
              </defs>
              <line x1="25%" y1="33%" x2="50%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="50%" y1="33%" x2="75%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="25%" y1="33%" x2="25%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="50%" y1="33%" x2="50%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="75%" y1="33%" x2="75%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="25%" y1="66%" x2="50%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="50%" y1="66%" x2="75%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Seamlessly Connected Financial Solutions</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our strategic network of international locations allows us to design integrated solutions that optimize your global financial position. 
            Navigate complex cross-border requirements with confidence and discover opportunities for growth and protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
