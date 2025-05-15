import { cn } from "@/lib/utils";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className={cn(
      "pt-20 pb-10 relative z-10",
      "border-t border-trailblazery-blue/20"
    )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Global financial strategies tailored to optimize your position and secure your future prosperity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center hover:bg-trailblazery-blue/30 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center hover:bg-trailblazery-blue/30 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452c.978 0 1.778-.773 1.778-1.729V1.729C24 .774 23.2 0 22.222 0h.003zM7.27 20.452H3.6V9.005h3.67v11.447zm-1.837-13.01c-1.18 0-2.13-.956-2.13-2.13 0-1.175.95-2.13 2.13-2.13 1.172 0 2.13.955 2.13 2.13 0 1.174-.956 2.13-2.13 2.13zm15.017 13.01h-3.664v-5.573c0-1.372-.026-3.131-1.91-3.131-1.912 0-2.21 1.49-2.21 3.03v5.676H9.004V9.005h3.516v1.618h.049c.491-.93 1.69-1.911 3.48-1.911 3.714 0 4.404 2.446 4.404 5.62v6.12h-.003z" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center hover:bg-trailblazery-blue/30 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.992c-.553 0-1.008-.438-1.008-.992 0-.553.455-.992 1.008-.992.553 0 1 .438 1 .992 0 .553-.447.992-1 .992zm7.992 6.992h-1.99v-3.008c0-.994-.859-1.992-1.858-1.992-.999 0-1.142 1-1.142 1v4h-2v-6h2v1.242s.686-1.242 2.308-1.242c1.624 0 2.682.984 2.682 3v3z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">International Tax</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Asset Protection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Wealth Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Corporate Structuring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Compliance Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Locations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">United States</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Dubai, UAE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Cyprus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Malta</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Andorra</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-trailblazery-magenta transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-trailblazery-blue/10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trailblazery. All rights reserved. Designed with Trailblazery branding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
