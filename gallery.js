/* Toggle Navbar on mobile */
document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-bar').classList.toggle('inactive')
})

/* Open and close Big Pic and Carousel */
const eachPic = document.querySelectorAll('.each-pic')
const carousel = document.querySelector('.carousel')
const bigPic = document.querySelector('.big-pic')
const closeBtn = document.querySelector('.close-gallerypic')
const darken = document.querySelector('.darken')
for(let i = 0; i < eachPic.length; i++){
  eachPic[i].addEventListener('click', ()=>{
    if(eachPic[i]){
    carousel.classList.remove('inactive')
    bigPic.classList.remove('inactive')
    darken.classList.remove('inactive')
  }
  closeBtn.addEventListener('click', ()=>{
    carousel.classList.add('inactive')
    bigPic.classList.add('inactive')
    darken.classList.add('inactive')
  })

  })
};

/* Making buttons interactive */
const slides = document.querySelectorAll('.carousel-pic');

slides.forEach((slide, indx)=>{
  slide.style.transform = `translateX(${indx*100}%)`;  
});

/* making carousel go left */
let curSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector('.btn-next');
nextSlide.addEventListener('click', () => {
  curSlide++;

  slides.forEach((slide, indx) =>{
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

nextSlide.addEventListener('click', () =>{
  if(curSlide === maxSlide){
    curSlide = 0;
  } else{
    curSlide++;
  }
})

/* Making carousel go right */
const prevSlide = document.querySelector('.btn-prev');

prevSlide.addEventListener('click', ()=>{
  if(curSlide === 0){
    curSlide = maxSlide
  } else{
    curSlide--;
  }

  slides.forEach((slide, indx) =>{
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
  });
});