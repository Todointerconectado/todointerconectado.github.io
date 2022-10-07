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


// connect the form to whatsapp
var sendbtn = document.querySelector('#sendbtn');

sendbtn.addEventListener('click' , enviarMensaje);

function enviarMensaje() {
    var inputName = document.querySelector('#name').value
    var textareaMensaje = document.querySelector('#description').value

    let urlWhatsapp = "https://api.whatsapp.com/send?phone=541154120432&text=Nombre y Apellido: %0A" + inputName + "%0A%0AMensaje: %0A" + textareaMensaje + "%0A";

    window.open(urlWhatsapp);
}