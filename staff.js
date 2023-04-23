/* Toggle Navbar on mobile */
document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-bar').classList.toggle('inactive')
})

/* Toggle Darken and Big staff description upon clicking a staff Pic*/

const staffPic = document.querySelectorAll('.staff-pic')
const staffDescription=document.querySelector('.staff-description')
const darken = document.querySelector('.darken')
const closePic = document.querySelector('.close-staffpic')

for(let i = 0; i < staffPic.length; i++){
  staffPic[i].addEventListener('click', () =>{
    if(staffPic[i]){
      staffDescription.style.display='flex'
      darken.style.display='block'
    }
  })

}

/*Closing staff description pic upon clicking cancel button or darken*/


[closePic, darken].map(function(element){ 
  element.addEventListener('click', ()=>{
    staffDescription.style.display='none'
    darken.style.display='none'
  }
  )
  
});

