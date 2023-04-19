/* Toggle Navbar on mobile */

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-bar').classList.toggle('inactive')
})

/*looping images*/
const images = ["./assets/kids-coding-teacher.jpg", "./assets/Teach-Your-Kids-Code-Front.webp", "./assets/robot-kid.jpg"]
const goodCitizens = document.querySelector('.good-citizens')
const carousel = document.querySelector('carousel')
const interval = setInterval(startCarousel, 2000)
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
const colorOver = document.querySelectorAll('.color-over')
const mainsText = document.querySelectorAll('.mains-text')
for(let i = 0; i < mainSections.length; i++){
  mainSections[i].addEventListener('mouseover', () =>{
    if(mainSections[i]){
      colorOver[i].style.display = 'block'
      mainsText[i].style.color = 'white'
    }
  })
  mainSections[i].addEventListener('mouseout', () =>{
    if(mainSections[i]){
      colorOver[i].style.display = 'none'
      mainsText[i].style.color = '#a6a8aa'
    }
  })
};

/* Change text color of text in main section */