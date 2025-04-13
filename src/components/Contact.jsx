import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    personas: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `¡Hola! Me gustaría hacer una reserva:
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Personas: ${formData.personas}
Mensaje: ${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/5511949749057?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <p>Reserva tu mesa o envíanos tus consultas</p>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+55 11949749057</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>info@labellaitalia.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Calle Principal 123, Madrid</p>
          </div>
          <div className="business-hours">
            <h3>Horario</h3>
            <p>Lunes - Viernes: 12:00 - 23:00</p>
            <p>Sábado - Domingo: 13:00 - 00:00</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombre"
            placeholder="Nombre" 
            required 
            value={formData.nombre}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="tel" 
            name="telefono"
            placeholder="Teléfono" 
            value={formData.telefono}
            onChange={handleChange}
          />
          <select 
            name="personas"
            value={formData.personas}
            onChange={handleChange}
          >
            <option value="">Selecciona el número de personas</option>
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5">5 o más personas</option>
          </select>
          <textarea 
            name="mensaje"
            placeholder="Mensaje" 
            required
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;