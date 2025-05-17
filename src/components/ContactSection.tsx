
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reset success message when dialog closes
  useEffect(() => {
    if (!isOpen) {
      // Wait a bit before resetting to allow for transition animations
      setTimeout(() => {
        setShowSuccess(false);
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    // Listen for events from the iframe
    const handleMessage = (event: MessageEvent) => {
      console.log("Message received:", event.data);

      let isSuccessSignal = false;

      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          // Check for specific success message from injected script or iframe
          if (data.type === 'submit' || data.event === 'submit') {
            isSuccessSignal = true;
          }
        } catch (e) {
          // Handle non-JSON string messages that indicate success
          // These might come from simpler postMessage implementations or if the iframe redirects
          // to a page whose URL is sent as a message, and that URL implies success.
          // Or, if the iframe sends simple strings like "success".
          if (typeof event.data === 'string' &&
              (event.data.toLowerCase().includes('success') ||
               event.data.toLowerCase().includes('thank you') ||
               event.data.toLowerCase().includes('gracias') ||
               event.data.toLowerCase().includes('complete') ||
               // "submitted" can be ambiguous, but if it's the only signal from a simple iframe,
               // it might be necessary. However, for leadconnector, 'form-submit-success' is better.
               // Let's be cautious with 'submitted' alone from a raw string.
               event.data.toLowerCase().includes('form-submit-success'))) { // Check for the type string itself
            isSuccessSignal = true;
          }
          console.log("Non-JSON message received:", event.data);
        }
      }

      if (isSuccessSignal) {
        setShowSuccess(true);
        toast({
          title: t.contact.formSuccess,
          description: t.contact.formSuccessMessage,
          duration: 5000,
        });
        setTimeout(() => {
          setIsOpen(false);
        }, 2000); // Close dialog after 2 seconds
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [t]);

  // Add a function to handle iframe load
  const handleIframeLoad = () => {
    console.log("Form iframe loaded");
    
    // Try to access iframe content
    try {
      const iframeContent = iframeRef.current?.contentWindow;
      if (iframeContent) {
        console.log("Attempting to access iframe content");
        
        // Try to add event listeners to buttons in the iframe
        setTimeout(() => {
          try {
            // Post a message to the iframe to set up communication
            iframeRef.current?.contentWindow?.postMessage('setup-close-listener', '*');
            
            // Try to inject a script into the iframe to listen for button clicks and form submissions
            const iframeDocument = iframeRef.current?.contentDocument || 
                                 (iframeRef.current?.contentWindow?.document);
            
            if (iframeDocument) {
              const script = iframeDocument.createElement('script');
              script.textContent = `
                document.addEventListener('click', function(e) {
                  if (e.target.tagName === 'BUTTON' || 
                      e.target.closest('button') ||
                      e.target.type === 'submit' ||
                      e.target.tagName === 'INPUT' && e.target.type === 'submit') {
                    window.parent.postMessage(JSON.stringify({type: 'button-click'}), '*');
                  }
                });
                
                // Listen for form submissions
                document.addEventListener('submit', function(e) {
                  window.parent.postMessage(JSON.stringify({type: 'form-submitted'}), '*');
                });
                
                // Listen for page changes through history API
                const originalPushState = history.pushState;
                history.pushState = function() {
                  originalPushState.apply(this, arguments);
                  window.parent.postMessage(JSON.stringify({type: 'page-change'}), '*');
                };

                // Look for thank you message or success message in the page content
                function checkForSuccessMessage() {
                  const pageText = document.body.innerText.toLowerCase();
                  if (pageText.includes('thank you') || 
                      pageText.includes('gracias') || 
                      pageText.includes('success') || 
                      pageText.includes('éxito') || 
                      pageText.includes('submitted') || 
                      pageText.includes('enviado')) {
                    window.parent.postMessage(JSON.stringify({type: 'form-submit-success'}), '*');
                  }
                }
                
                // Check on load and periodically
                checkForSuccessMessage();
                setInterval(checkForSuccessMessage, 1000);
                
                // Observe DOM changes to detect success message faster
                const observer = new MutationObserver(function(mutations) {
                  checkForSuccessMessage();
                });
                
                observer.observe(document.body, {
                  childList: true,
                  subtree: true,
                  characterData: true
                });
              `;
              
              try {
                iframeDocument.body.appendChild(script);
              } catch (error) {
                console.log("Could not append script to iframe body", error);
              }
            }
          } catch (error) {
            console.log("Error setting up iframe communication", error);
          }
        }, 1000); // Wait for iframe to fully load
      }
    } catch (error) {
      console.log("Cannot access iframe content due to same-origin policy", error);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">{t.contact.title}</span>
            <span className="text-gradient ml-2">{t.contact.subtitle}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-trailblazery-blue/20 bg-trailblazery-dark/60 backdrop-blur-sm p-6 animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-white">{t.contact.info}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start animate-on-scroll delay-100">
                <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-trailblazery-magenta" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.contact.phone}</p>
                  <p className="text-white">+34 621425745</p>
                </div>
              </div>
              
              <div className="flex items-start animate-on-scroll delay-200">
                <div className="h-10 w-10 rounded-full bg-trailblazery-blue/20 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-trailblazery-magenta" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.contact.offices}</p>
                  <p className="text-white">{t.contact.officesList}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-trailblazery-blue/20 animate-on-scroll delay-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{t.contact.peaceTitle}</h3>
                  <p className="text-gray-300 mt-2">
                    {t.contact.peaceText}
                  </p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white"
                  onClick={() => window.open('https://wa.me/34621425745', '_blank')}
                >
                  {t.contact.cta}
                </Button>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-trailblazery-blue/20 text-center animate-on-scroll delay-400">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-gradient-to-r from-trailblazery-blue to-trailblazery-magenta hover:opacity-90 text-white w-full md:w-auto"
                  >
                    {t.contact.leaveData}
                  </Button>
                </DialogTrigger>
                <DialogContent className="contact-form-dialog w-full max-w-4xl p-0 border-trailblazery-blue/30 bg-trailblazery-dark/90">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle className="text-white">{t.contact.formTitle}</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      {t.contact.formDescription}
                    </DialogDescription>
                  </DialogHeader>
                  
                  {showSuccess ? (
                    <div className="p-8 text-center">
                      <Alert className="bg-trailblazery-blue/10 border-trailblazery-blue/20 text-white mb-4">
                        <CheckCircle className="h-5 w-5 text-trailblazery-magenta" />
                        <AlertTitle className="text-lg font-bold text-white mb-2">
                          Thank you for taking the time to complete this form.
                        </AlertTitle>
                        <AlertDescription className="text-gray-300">
                          We've received your information and will be in touch with you shortly.
                        </AlertDescription>
                      </Alert>
                    </div>
                  ) : (
                    <iframe 
                      ref={iframeRef}
                      src="https://api.leadconnectorhq.com/widget/form/w9FxJLqrjzzQEG2jtFKW" 
                      className="w-full h-[600px] border-0" 
                      title="Contact Form"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      onLoad={handleIframeLoad}
                    />
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
