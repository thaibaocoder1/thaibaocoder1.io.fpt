window.addEventListener("load", function () {
  const accordionListHeader = document.querySelectorAll(".accordion-header");
  [...accordionListHeader].forEach((item) => {
    item.addEventListener("click", handleDisplayAccordion);
  });
  function handleDisplayAccordion(e) {
    const parent = e.target.parentNode.parentNode;
    const content = parent.querySelector(".accordion-content");
    content.style.height = `${content.scollHeight}px`;
    content.classList.toggle("is-active");
    const icon = parent.querySelector(".accordion-header__icon");
    icon.classList.toggle("fa-caret-up");
    icon.classList.toggle("fa-caret-down");
  }
});
// Navbar
window.addEventListener("load", function () {
  const navbarEL = document.querySelector(".navbar");
  const barsEl = document.querySelector(".cta-icon");
  barsEl.addEventListener("click", function (e) {
    navbarEL.classList.toggle("active");
  });
});
// Move to top
const btnScroll = document.querySelector(".move-to-top");
window.addEventListener("scroll", function () {
  if (this.scrollY > 300) {
    btnScroll.classList.add("active");
  } else {
    btnScroll.classList.remove("active");
  }
});
btnScroll.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
