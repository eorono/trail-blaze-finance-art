
import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  // Configurar el observer de intersección cuando el componente se monta
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the item is visible
      rootMargin: "0px 0px -100px 0px" // Trigger slightly before the element comes into view
    });

    // Observa todos los elementos con la clase 'animate-on-scroll'
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animateElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null;
}
