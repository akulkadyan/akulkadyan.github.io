fetch('projects.json)
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('project-container');

    data.forEach(project => {
      const card = `
        <div class="project-card">

          <img src="${project.image}" class="project-image">

          <div class="project-content">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="tech-stack">${project.tech}</div>

            <div class="project-links">
              <a href="${project.github}" target="_blank">
                GitHub
              </a>
            </div>

          </div>
        </div>
      `;

      container.innerHTML += card;
    });
  });
