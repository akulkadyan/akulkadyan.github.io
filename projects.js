function loadProjects(category)
{
  fetch('projects.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('project-container');

      data
        .filter(p => p.category === category)
        .forEach(p => {
          container.innerHTML += `
            <div class="project-card">
              <img src="${p.image}" class="project-image">
              <div class="project-content">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="tech-stack">${p.tech}</div>
                <div class="project-links">
                  <a href="${p.github}" target="_blank">GitHub</a>
                </div>
              </div>
            </div>
          `;
        });
    });
}
