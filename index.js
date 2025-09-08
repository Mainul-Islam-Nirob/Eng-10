const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const sliderContainer = document.querySelector('#slider-container');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const weMenu = document.querySelector('#we-page');
  const memoriesMenu = document.querySelector('#memories-page');


  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' my menu items while innerWidth > 960
  if (window.innerWidth > 960 && scrollPos < 780) {
    homeMenu.classList.add('highlight');
    weMenu.classList.remove('highlight');
    memoriesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos >= 780 && scrollPos < 6100) {
    weMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    memoriesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos >= 6100) {
    memoriesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    weMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  elem.classList.remove('highlight_mobile');

  }

  // adds 'highlight' while mobile view
 if (window.innerWidth < 960 && scrollPos < 700) {
  homeMenu.classList.add('highlight_mobile');
  weMenu.classList.remove('highlight_mobile');
  memoriesMenu.classList.remove('highlight_mobile');
  return;
} else if (window.innerWidth < 960 && scrollPos >= 700 && scrollPos < 19700) {
  weMenu.classList.add('highlight_mobile');
  homeMenu.classList.remove('highlight_mobile');
  memoriesMenu.classList.remove('highlight_mobile');
  return;
} else if (window.innerWidth < 960 && scrollPos >= 19700) {
  memoriesMenu.classList.add('highlight_mobile');
  homeMenu.classList.remove('highlight_mobile');
  weMenu.classList.remove('highlight_mobile');
  return;
}

if ((elem && window.innerWIdth > 960) || elem) {
  // elem.classList.remove('highlight');
  elem.classList.remove('highlight_mobile');
}

};



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


//Slider
// for (let i = 1; i <= 75; i++) {
//   let slide = document.createElement("div");
//   slide.classList.add("slide");
  
//   let img = document.createElement("img");
//   img.src = "./memo-img/" + i + ".jpg";
//   img.alt = "memories";
  
//   slide.appendChild(img);
//   sliderContainer.appendChild(slide);
// }
  

for (let i = 1; i <= 75; i++) {
  let slide = document.createElement("div");
  slide.classList.add("slide");

  let img = document.createElement("img");
  img.alt = "memories";

  // Try .jpg first
  img.src = `./memo-img/${i}.jpg`;

  // If .jpg fails, fallback to .jpeg
  img.onerror = function () {
    this.onerror = null; // Prevent infinite loop
    this.src = `./memo-img/${i}.jpeg`;
  };

  slide.appendChild(img);
  sliderContainer.appendChild(slide);
}