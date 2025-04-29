import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Sistema POS Local',
    description: 'Aplicación de punto de venta con almacenamiento local.',
  },
  {
    id: 2,
    title: 'Dashboard Financiero',
    description: 'Panel de control para reportes financieros en tiempo real.',
  },
  {
    id: 3,
    title: 'Gestor de Inventario',
    description: 'App para control de stock e inventarios.',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
