const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// window.addEventListener('scroll',function(){
//     let navbar = document.querySelector('header');
//     navbar.classList.toggle('sticky', window.scrollY > 0)
// })


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});


// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('header');
//     navbar.classList.toggle('sticky', window.scrollY > 0);
  
//     const navLinks = document.querySelectorAll('.nav-link');
//     const navLogo = document.querySelector('.nav-logo');
  
//     navLinks.forEach((link) => {
//       link.classList.toggle('sticky', window.scrollY > 0);
//     });
  
//     navLogo.classList.toggle('sticky', window.scrollY > 0);
//   });


const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);