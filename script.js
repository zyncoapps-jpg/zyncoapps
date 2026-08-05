const button = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");

if (button && navigation) {
  button.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}
