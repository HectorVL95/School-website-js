/* Toggle Navbar on mobile */
document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.nav-bar').classList.toggle('inactive')
})

/* Toggle Darken and Big staff description upon clicking a staff Pic*/

const staffPic = document.querySelectorAll('.staff-pic')
for(let i = 0; i < staffPic.length; i++){
  staffPic[i].addEventListener('click', () =>{
    const staffDescription=document.querySelector('.staff-description')
    if(staffPic[i]){
      staffDescription.style.display='flex'
    }
  })

}
/*staffPic.addEventListener('click', showStaffDescription)
function showStaffDescription(){
  const staffDescription=document.querySelector('.staff-description')
  staffDescription.style.display='block'
}*/