const timeLine = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

timeLine.to(".intro-text__span", {
  y: "0%",
  duration: 1,
  stagger: 0.25,
});

timeLine.to(".intro-slider", {
  y: "-100%",
  duration: 1.5,
  delay: 1.5,
});

timeLine.to(
  ".intro",
  {
    y: "-100%",
    duration: 1,
  },
  "-=1"
);

timeLine.fromTo(
  ".contact-widget",
  { opacity: 0 },
  { opacity: 1, duration: 0.6 }
);
timeLine.fromTo(
  ".theme-switch-widget",
  { opacity: 0 },
  { opacity: 1, duration: 0.6 }
);
timeLine.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 0.6 });
timeLine.fromTo(
  ".header",
  { opacity: 0 },
  { opacity: 1, duration: 0.6 },
  "-=0.6"
);
