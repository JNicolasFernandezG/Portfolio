import React, { useState, useEffect } from 'react';
import './ScrollNavbar.css';

// Definimos los tipos de las Props
interface ScrollNavbarProps {
  sectionIds: string[];
}

const ScrollNavbar: React.FC<ScrollNavbarProps> = ({ sectionIds }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento entra en el viewport
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.6, // Se activa cuando el 60% de la sección es visible
        rootMargin: "0px" 
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="scroll-navbar">

      {/* Puntos de navegación */}
      {sectionIds.map((id) => (
        <button
          key={id}
          className={`nav-dot ${activeSection === id ? 'active' : ''}`}
          onClick={() => scrollToSection(id)}
          title={`Ir a ${id}`}
        />
      ))}
    </nav>
  );
};

export default ScrollNavbar;