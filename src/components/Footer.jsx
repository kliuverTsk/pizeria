import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>La Bella Italia</h3>
          <p>Experiencia culinaria auténtica italiana en el corazón de la ciudad.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Horario</h4>
          <p>Lunes - Viernes: 12:00 - 23:00</p>
          <p>Sábado - Domingo: 13:00 - 00:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 La Bella Italia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;