'use strict'
// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
   //console.log(window.scrollY);
   //console.log(`navbarHeight: ${navbarHeight}`);
   if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
   } else {
    navbar.classList.remove('navbar--dark');
   }

});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  navbarParent.classList.remove('open');
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarParent = document.querySelector('#navbar')
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbarParent.classList.toggle('open');
});


// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
 scrollIntoView('#contact');
 });

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const home1 = document.querySelector('#home');
const homeHeight = home1.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


// Show  "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY> homeHeight /2) {
    arrowUp.classList.add('visible');
    } else {
    arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" botton
arrowUp.addEventListener('click', () =>{
    scrollIntoView('#home');
})

// Projects (if it had span.. etc we can use debug tools, use break point
// e.target / e.target.parentNode / e.target.parentNode.dataset.filter.. 

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null) {
  return;
}
//console.log(filter);

//Remove selection from the previous item and select the new one

 const active = document.querySelector('.category__btn.selected');
 if (active != null) {
  active.classList.remove('selected');
  }
e.target.classList.add('selected');


  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
//   console.log(project.dataset.type)
    if(filter === '*' || filter === project.dataset.type) {
    project.classList.remove('invisible');
   } else {
    project.classList.add('invisible');
   }
  });

    projectContainer.classList.remove('anim-out');
  }, 300);
});

//for(let project of projects) {
//  console.log(project);
//}

//let project;
//for(let i = 0; i< projects.length ; i++) {
//  project = projects[i];
//  console.log(project);
//}


 function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
 }


let cnt = 0;
const avatarButton = document.querySelector(".home__avatar");
function clickCounter() {
  cnt+=1;
  console.log(cnt);
  if(cnt == 10) {
    document.getElementById('home__avatar1').src = "imgs/favicon.png";
    cnt = cnt - 10;
  } else { document.getElementById('home__avatar1').src = "imgs/profile.jpeg"; }
}
avatarButton.addEventListener("click", clickCounter);
