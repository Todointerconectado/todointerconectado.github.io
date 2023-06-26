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
// Combinación de teclado: alt + 91: []  -  alt + 92: \  -  alt + 94: ^  - alt + 96: ``
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
let sendbtn = document.querySelector('#sendbtn');

sendbtn.addEventListener('click' , enviarMensaje);

function enviarMensaje() {
    let inputName = document.querySelector('#name').value
    let textareaMensaje = document.querySelector('#description').value

    let urlWhatsapp = "https://api.whatsapp.com/send?phone=541154120432&text=Nombre y Apellido: %0A" + inputName + "%0A%0AMensaje: %0A" + textareaMensaje + "%0A";

    window.open(urlWhatsapp);
}

// Compartir en redes sociales

const link  = 'https:/\/todointerconectado.com'; //encodeURI(window.location.href);
const msg   = encodeURIComponent('Comparte esta página para ayudar a otras personas!');
const title = encodeURIComponent(document.querySelector('title').textContent);

const compartir_facebook = document.querySelector('.compartir-facebook');
compartir_facebook.href = `https://www.facebook.com/share.php?u=${link}`;

const compartir_twitter = document.querySelector('.compartir-twitter');
compartir_twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}&hashtags=todointerconectado,desarrolloweb,javascript,programming`;

const compartir_linkedin = document.querySelector('.compartir-linkedin');
compartir_linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;