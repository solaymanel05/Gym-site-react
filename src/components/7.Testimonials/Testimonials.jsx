import React from 'react';
import "./Testimonials.css"
import { testimonials } from '../../assets/data/data';

export default function Testimonials (){
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}, <span className="testimonial-designation">{testimonial.designation}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


