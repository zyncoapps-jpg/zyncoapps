const button = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
const desktopQuery = window.matchMedia("(min-width: 821px)");

function closeMenu() {
  if (!button || !navigation) return;
  navigation.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

if (button && navigation) {
  button.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
