
import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-description">
        Si quieres hablar sobre tecnología, proyectos o solo hacer una pregunta, ¡estoy aquí para ayudarte!
      </p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/javier-gacitua" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://github.com/JavierGacituaVilla" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        <a href="mailto :javiergacitua.v@gmail.com" className="contact-link">Email</a>
      </div>
    </section>
  );
};

export default Contact;
