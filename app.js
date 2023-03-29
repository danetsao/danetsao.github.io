fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const projectsList = document.querySelector('#projects-list');
    var count = 0;
    
    data.forEach(project => {
        count++;
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = project.name;
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');

        projectItem.appendChild(projectLink);
        projectItem.appendChild(projectDescription);
        projectItem.appendChild(projectImage);
        
        projectsList.appendChild(projectItem);
    });
    while (count < 6) {
        const projectLink = document.createElement('a');
        projectLink.href = "https://github.com/danetsao";
        projectLink.textContent = "Coming Soon";
  
        const projectDescription = document.createElement('p');
        projectDescription.textContent = "";
  
        const projectImage = document.createElement('img');
        projectImage.src = "images/question.jpg";
  
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');
  
        projectItem.appendChild(projectLink);
        projectItem.appendChild(projectDescription);
        projectItem.appendChild(projectImage);
  
        projectsList.appendChild(projectItem);
        count++;
      }
});
