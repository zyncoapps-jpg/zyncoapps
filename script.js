const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
const desktopQuery = window.matchMedia("(min-width: 821px)");

function closeMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
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
