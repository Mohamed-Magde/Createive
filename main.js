const sectionOne = document.querySelector(".header");
const nav = document.querySelector(".nav");

const sectionOneOptions = {
  rootMargin: "-500px 0px 0px 0px"
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scroled");
    } else {
      nav.classList.remove("nav-scroled");
    }
  });
}, sectionOneOptions);
observer.observe(sectionOne);
