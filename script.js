const stylingNavText = document.querySelectorAll(".nav-text");
const stylingSVG = document.querySelectorAll("svg");

stylingNavText.forEach((item) => {
  item.addEventListener("mouseover", () =>
    item.classList.add("styling-nav-text")
  );
});
stylingNavText.forEach((item) => {
  item.addEventListener("mouseout", () =>
    item.classList.remove("styling-nav-text")
  );
});

stylingSVG.forEach((item) => {
  item.addEventListener("mouseover", () => item.classList.add("styling-svg"));
});
stylingSVG.forEach((item) => {
  item.addEventListener("mouseout", () => item.classList.remove("styling-svg"));
});
