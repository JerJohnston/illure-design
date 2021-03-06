window.addEventListener('load', function(e){

  // nav menu toggle icon 

  const menuToggle = document.querySelector('.nav-toggle');
  let menuOpen = false;

  menuToggle.addEventListener('click', (e) => {

      document.querySelector('.nav-bar').classList.toggle('show-nav');

      if(!menuOpen){
        menuToggle.classList.add('open');
        menuOpen = true;
      } else {
        menuToggle.classList.remove('open');
        menuOpen = false;
      }
  })

  // Project Page Templates

  // Reference Variables

  let projectArray = [];
  let projectToggle = document.querySelector('.project-toggle');

  const projects = fetch("/js/json/projects.json")
    .then((response) => response.json());

  

  projects.then((data) => {

    projectArray = [...data];

  })

  // adding the project list to the DOM

  projectToggle.addEventListener('click', (e) => {

    const projectListContent = document.querySelector('.project-list');
  
    const projectListTemplate = `
      <div class="project-list>
           <ul class="projects">

           </ul>
        </div>
    `

    const displayProjectList = document
      .createRange()
      .createContextualFragment(projectListTemplate);

    projectListContent.appendChild(displayProjectList);

  
  
    projectArray.map(function (value, index) {
       const id = value.id;
       const name = value.name;
        const projectMenu = document.querySelector('.project-list')
      
        const projectListTemplate = `
        <ul class="project-list">
           <li class="project-item">
                <a href="#" class="project-link" data-id="${id}">${name}</a>
            </li>
         </ul>
       `

        const projectList = document
           .createRange()
           .createContextualFragment(projectListTemplate)
           .querySelector('.project-item');

         projectMenu.appendChild(projectList);
      
     })

     document.querySelectorAll('.project-link')
                .forEach(project => {
                    project.addEventListener('click', (e) => {

                      
                    })
                })
  })

})
