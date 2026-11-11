const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-btn");

if (header && menuButton) {
  header.classList.add("menu-enabled");

  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );
  });
}