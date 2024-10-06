// header section 
const menuOpenButton = document.querySelector(".menu");
const menuCloseButton = document.querySelector(".close");
const navLinks = document.querySelectorAll(".home-mobile");
// open meni 
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu")
});
// close menu 
menuCloseButton.addEventListener("click",() => menuOpenButton.click
());
// click link  
navLinks.forEach(link => {
  link.addEventListener("click",() => menuOpenButton.click());
});


// header section 


// home swction anomation

function revealFunction(){
  window.sr = ScrollReveal({

   duration:1350,
   distance:'200px',


  });
  sr.reveal('.foods',{origin:'bottom',interval:600,distance:'80px', reset:false});
  sr.reveal('.foods-item',{origin:'bottom',distance:'250px', scale:0.7, reset:false,easing:'ease-out', duration:2300});
  sr.reveal('.food-item-1st',{origin:"left", reset:false, interval:0 ,distance:'130px', scale:0.2,easing:'ease-out', duration:2000,});
  sr.reveal('.food-item-2nd',{origin:"right", reset:false, interval:0 ,distance:'130px', scale:0.2,easing:'ease-out', duration:2000,});
  sr.reveal('.cooks-btn',{origin:'bottom',interval:600, distance:'70px', reset:false});
};

window.addEventListener('load',()=>{
  revealFunction();
})




// swiper slaider

