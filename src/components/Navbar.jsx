import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>La Bella Italia</h1>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Inicio</a>
        <a onClick={() => scrollToSection('about')}>Nosotros</a>
        <a onClick={() => scrollToSection('menu')}>Menú</a>
        <a onClick={() => scrollToSection('testimonials')}>Testimonios</a>
        <a onClick={() => scrollToSection('contact')}>Contacto</a>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;