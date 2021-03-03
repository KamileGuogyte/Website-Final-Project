let dropdownButtons = document.querySelectorAll("[dropdown-target]");
let navbarTogglers = document.querySelectorAll(".menu-toggler[menu-target]");

dropdownButtons.forEach(dropdownButton => {
  let target = dropdownButton.getAttribute("dropdown-target");
  let dropdown = dropdownButton.parentElement.querySelector(target);
  let hidden = true;
  dropdown.classList.add("hide");
  dropdownButton.addEventListener("click", function() {
    if (hidden) {
      dropdown.classList.remove("hide");
      dropdownButton.classList.add("show");
      hidden = false;
    } else {
      dropdown.classList.add("hide");
      dropdownButton.classList.remove("show");
      hidden = true;
    }
  });
});

navbarTogglers.forEach(navbarToggler => {
  let target = navbarToggler.getAttribute("menu-target");
  let menu = document.querySelector(target);
  let hidden = true;
  menu.classList.add("hide");
  navbarToggler.addEventListener("click", function(){
    if (hidden) {
      menu.classList.remove("hide");
      navbarToggler.classList.add("show");
      hidden = false;
    } else {
      menu.classList.add("hide");
      navbarToggler.classList.remove("show");
      hidden = true;
    }
  });
});

