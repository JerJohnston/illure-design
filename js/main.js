import AOS from 'aos';
AOS.init();
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

  document.querySelectorAll('.project-link')
  .forEach(item => {  
      item.addEventListener('click', (e) => { 

        const content = document.querySelector('.project-container')
        const wrapper = document.querySelector('.template-wrapper');

        if (item.textContent == 'J Fitness and Training'){

          if (wrapper !== null ){
            content.removeChild(wrapper);
          }
          
          
          fetch("/js/json/jft.json")
          .then((response) => response.json())
          .then((data) => {
                dataObj = data;

                const projectTemplate = `
                    <div class="template-wrapper">
                      <h2 class="project-header">${data.name}</h2>
                      <div class="details-view">
                          <div class="project-details">
                              <h4>Build :</h4>
                              <p>${data.build}</p>
                          </div>
                          <div class="project-details">
                              <h4>Started :</h4>
                              <p>${data.start}</p>
                          </div>
                          <div class="project-details">
                              <h4>Completed :</h4>
                              <p>${data.completed}</p>
                          </div>
                      </div>
                      <div class="project-description">
                          <div class="project-url">
                              <p>Project Homepage :</p>
                              <a href="${data.website}">${data.website}</a>
                          </div>
                          <p>${data.description}</p>
                      </div>
                      <div class="img-container"><a href="${data.url}"><img src="${data.img}" alt="Preview Image for J Fitness and Training"></a></div>
                    </div>
                `

                const displayProfile = document
                        .createRange()
                        .createContextualFragment(projectTemplate);
                content.appendChild(displayProfile);
              }).catch(error => console.log(error));
        } else if (item.textContent == 'Treasure Island UI Project'){
          
         
          if (wrapper !== null ){
            content.removeChild(wrapper);
          } 

          fetch("/js/json/ti.json")
          .then((response) => response.json())
          .then((data) => {
                dataObj = data;

                const projectTemplate = `
                    <h2 class="project-header">${data.name}</h2>
                    <div class="details-view">
                        <div class="project-details">
                            <h4>Build :</h4>
                            <p>${data.build}</p>
                        </div>
                        <div class="project-details">
                            <h4>Started :</h4>
                            <p>${data.start}</p>
                        </div>
                        <div class="project-details">
                            <h4>Completed :</h4>
                            <p>${data.completed}</p>
                        </div>
                    </div>
                    <div class="project-description">
                        <div class="project-url">
                            <p>Project Homepage :</p>
                            <a href="${data.website}">${data.website}</a>
                        </div>
                        <p>${data.description}</p>
                    </div>
                    <div class="img-container"><a href="${data.url}"><img src="${data.img}" alt="Preview Image for Treasure Island UI Page"></a></div>
                `

                const displayProfile = document
                        .createRange()
                        .createContextualFragment(projectTemplate);
                content.appendChild(displayProfile);
              }).catch(error => console.log(error));
        }

      });
    
    
    });
                        
      

})
