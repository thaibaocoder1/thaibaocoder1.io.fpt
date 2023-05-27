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
