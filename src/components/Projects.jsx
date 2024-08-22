import React from "react";

const Projects = [
    { 
      title: 'RU-Campus-Cuisine', 
      imgSrc: 'src\\assets\\project1.png', 
      deployUrl: 'https://rickeyz12.github.io/RU-Campus-Cuisine/', 
      repoUrl: 'https://github.com/destinyjen/RU-Campus-Cuisine' 
    },
    { 
        title: 'astro-journal', 
        imgSrc: 'src\\assets\\project2.png', 
        deployUrl: 'https://astro-journal.onrender.com/', 
        repoUrl: 'https://github.com/destinyjen/astro-journal' 
      },
    { 
      title: 'Employee-TrackerApp', 
      imgSrc: 'src\\assets\\project3.png', 
      repoUrl: 'https://github.com/destinyjen/Employee-TrackerApp' 
    },
    { 
        title: 'Marketing-BlogApp', 
        imgSrc: 'src\\assets\\project4.png', 
        deployUrl: 'https://destinyjen.github.io/Marketing-BlogApp/', 
        repoUrl: 'https://github.com/destinyjen/Marketing-BlogApp' 
      },
  ];

return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <img src={project.imgSrc} alt={project.title} />
            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">View Project</a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))}
      </div>
    </section>
  );

export default Projects;  // Ensure to export the component