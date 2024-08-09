// MENU SHOW Y HEDDEN

const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Hedden

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});


// Remove Menu

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll sections active links
const sections = document.querySelectorAll('section[id]')
 window.addEventListener("scroll" , scrollActive)

 function scrollActive(){
  const scrollY = window.pageYOffset
 }

  sections.forEach(current =>{
     const sectionHight = current.OffsetHight
     const sectionTop = current.OffsetTop - 50
     sectionId = current.getAttribute('id')

     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
       document.querySelector('.nav-menu a[href*='+ sctionId +']').classList.Add('active')
     }else{
      document.querySelector('.nav-menu a[href*='+ sctionId +']').classList.remove('active')
     }
  })

  






