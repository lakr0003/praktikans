"use strict";
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));

const mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", () => {
  // viser knappen når man scroller længere end 1 viewport højde
  if (window.scrollY > window.innerHeight * 0.8) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }

  // Baggrundsfarve ændres efter scroll
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min(window.scrollY / maxScroll, 1);
  // Fra mørk til lysere
  const lightness = 20 + scrollPercent * 50;
  document.body.style.setProperty("--bg-lightness", `${lightness}%`);
});

mybutton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
