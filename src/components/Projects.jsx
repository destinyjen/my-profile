import React from "react";

const Projects = () => {

  const Repos = [
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
      {
        title: 'Task Board',
        imgSrc: 'src\\assets\\project5.png',
        deployUrl: 'https://destinyjen.github.io/TaskBoard-App/',
        repoUrl: 'https://github.com/destinyjen/TaskBoard-App'
      },
      {
        title: 'JATE Text Editor',
        imgSrc: 'src\\assets\\project6.png',
        deployUrl: 'https://text-editor-cylw.onrender.com/',
        repoUrl: 'https://github.com/destinyjen/text-editor'
      }
  ];

return (
  <section id="projects">
    <h2>Projects</h2>
    <div id="project-list">
      {Repos.map((repo, index) => {
        return (
          <div key={index} className="project">
            <h3>{repo.title}</h3>
            <img src={repo.imgSrc} alt={repo.title} />
            <div className="project-links">
              {repo.deployUrl && <a href={repo.deployUrl}>Deployed Link</a>}
              {repo.repoUrl && <a href={repo.repoUrl}>Repository Link</a>}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
}

export default Projects;  // Ensure to export the component