import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María García",
      comment: "La mejor pasta que he probado fuera de Italia. El ambiente es increíble y el servicio excepcional.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      comment: "Un lugar perfecto para cenas románticas. Los platos son obras de arte y los sabores son extraordinarios.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      comment: "La atención al cliente es espectacular. Definitivamente volveré con mi familia.",
      rating: 5,
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.comment}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;