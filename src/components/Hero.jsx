import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Bienvenidos a La Bella Italia</h1>
        <p>Una experiencia culinaria única en el corazón de la ciudad</p>
        <button className="cta-button" onClick={scrollToContact}>Reservar Mesa</button>
      </div>
    </section>
  );
};

export default Hero;