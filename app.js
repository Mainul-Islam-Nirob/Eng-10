const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

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
  console.log(scrollPos);

  // adds 'highlight' my menu items while innerWidth > 960
  if (window.innerWidth > 960 && scrollPos < 780) {
    homeMenu.classList.add('highlight');
    weMenu.classList.remove('highlight');
    memoriesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos >= 780 && scrollPos < 6200) {
    weMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    memoriesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos >= 6200) {
    memoriesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    weMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }

  // adds 'highlight' while mobile view
 if (window.innerWidth < 760 && scrollPos < 700) {
  homeMenu.classList.add('highlight_mobile');
  weMenu.classList.remove('highlight_mobile');
  memoriesMenu.classList.remove('highlight_mobile');
  return;
} else if (window.innerWidth < 760 && scrollPos >= 700 && scrollPos < 19700) {
  weMenu.classList.add('highlight_mobile');
  homeMenu.classList.remove('highlight_mobile');
  memoriesMenu.classList.remove('highlight_mobile');
  return;
} else if (window.innerWidth < 760 && scrollPos >= 19700) {
  memoriesMenu.classList.add('highlight_mobile');
  homeMenu.classList.remove('highlight_mobile');
  weMenu.classList.remove('highlight_mobile');
  return;
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