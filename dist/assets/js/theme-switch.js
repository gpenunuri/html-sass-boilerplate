function ThemeSwitch(themeWidget) {
  if (!(themeWidget instanceof Element)) {
    throw new Error("No themeWidget passed in");
  }

  const input = themeWidget.querySelector(".switch-input");
  const sunIcon = themeWidget.querySelector(".switch-icon--sun");
  const moonIcon = themeWidget.querySelector(".switch-icon--moon");

  function handleSwitch() {
    sunIcon.classList.toggle("hide");
    moonIcon.classList.toggle("hide");
  }

  input.addEventListener("change", handleSwitch);
}

const themeSwitch = ThemeSwitch(document.querySelector(".theme-switch-widget"));
