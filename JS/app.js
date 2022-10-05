// Section menu
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// sacar el menú al seleccionar una sección - bring up the menu when selecting a section
// Combinación de teclado:
// alt + 91: []  -  alt + 92: \  -  alt + 94: ^  - alt + 96: ``
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if(entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    });
}, {rootMargin: "-40% 0px -60% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target) {
        observer.observe(target);
    }
});

