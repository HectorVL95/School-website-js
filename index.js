/* Toggle Navbar on mobile */

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-bar').classList.toggle('inactive')
})

/*looping images*/
const images = ["./assets/kids-coding-teacher.jpg", "./assets/Teach-Your-Kids-Code-Front.webp", "./assets/robot-kid.jpg"]
const goodCitizens = document.querySelector('.good-citizens')
const carousel = document.querySelector('carousel')
const interval = setInterval(startCarousel, 3000)
index = 1;
function startCarousel(){
  goodCitizens.style.backgroundImage =
  `url(${images[index++]})`
  goodCitizens.classList.remove('carousel')
  void goodCitizens.offsetWidth;
  goodCitizens.classList.add('carousel')
  if(index > images.length - 1) index = 0;
}

/* Adding background for different sections */
const mainSections = document.querySelectorAll('.main-sections')
for(let i = 0; i < mainSections.length; i++){
  mainSections[i].addEventListener('mouseover', () =>{
    if(mainSections[i]){
      mainSections[i].style.backgroundColor = 'Blue'
    }
  })
  mainSections[i].addEventListener('mouseout', () =>{
    if(mainSections[i]){
      mainSections[i].style.removeProperty('background-color')
    }
  })
}


