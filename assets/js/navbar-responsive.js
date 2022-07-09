function NavResponsive(navigation) {
  if (!(navigation instanceof Element)) {
    throw new Error("No navbar passed in");
  }

  const navToggleBtn = navigation.querySelector(".navigation__toggle");
  const navLinks = navigation.querySelector(".navigation__list");

  function handleNavToggle(e) {
    navigation.classList.toggle("navigation--xs");
    navLinks.classList.toggle("navigation__list--xs");
  }

  navToggleBtn.addEventListener("change", handleNavToggle);
}

const navigation = NavResponsive(document.querySelector(".navigation"));
