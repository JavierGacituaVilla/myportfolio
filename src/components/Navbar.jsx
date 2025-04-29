import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Javier Gacitúa</div>
      <ul className="nav-links">
        <li><a href="About.jsx">Sobre mí</a></li>
        <li><a href="Projects.jsx">Proyectos</a></li>
        <li><a href="Contact.jsx">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
