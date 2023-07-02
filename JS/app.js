// --------- Section menu ---------
const containerMenu = () => {
    const datosMenu = {
        'menu': document.querySelector(".menu"),
        'openMenuBtn': document.querySelector(".open-menu"),
        'closeMenuBtn': document.querySelector(".close-menu")
    }

    const toggleMenu = () => {
        datosMenu.menu.classList.toggle("menu_opened");
    }

    const controlMenu = (btnMenu) => {
        btnMenu.addEventListener("click", toggleMenu);
    }

    controlMenu(datosMenu.openMenuBtn);
    controlMenu(datosMenu.closeMenuBtn);
}
containerMenu();


// --------- sacar el menú al seleccionar una sección ---------
const containerSeccionSeleccionado = () => {
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
        menuLink.addEventListener("click", () => {
            menu.classList.remove("menu_opened");
        });

        const hash = menuLink.getAttribute("href");
        const target = document.querySelector(hash);
        if(target) {
            observer.observe(target);
        }
    });
}
containerSeccionSeleccionado();


// --------- connect the form to whatsapp ---------
const containerConectarFormAWhatsapp = () => {
    let sendbtn = document.querySelector('#sendbtn');

    sendbtn.addEventListener('click', (e) => {
        const datosWhatsapp = {
            'apiWhatsapp': 'https://api.whatsapp.com/send?phone=',
            'inputName': document.querySelector('#name').value,
            'telefono': '541154120432',
            'textareaMensaje': document.querySelector('#description').value
        }

        let urlWhatsapp = `${datosWhatsapp.apiWhatsapp} ${datosWhatsapp.telefono}&text=*Nombre y Apellido:* ${datosWhatsapp.inputName} %0A%0A*Mensaje:* ${datosWhatsapp.textareaMensaje} %0A`

        window.open(urlWhatsapp);
    });
}
containerConectarFormAWhatsapp();


// --------- Compartir en redes sociales ---------
const containerCompartirEnRedesSociales = () => {
    const datosCompartirRedes = {
        'link': 'https:/\/todointerconectado.com', //encodeURI(window.location.href)
        'msgWhatsapp': 'Mira esta página que tiene muy buena información.',
        'msg':   encodeURIComponent('Comparte esta página para ayudar a otras personas!'),
        'title': encodeURIComponent(document.querySelector('title').textContent)
    }

    const compartir_whatsapp = document.querySelector('.compartir-whatsapp');
    compartir_whatsapp.href  = `https://api.whatsapp.com/send?text= ${datosCompartirRedes.msgWhatsapp} %0A%0A ${datosCompartirRedes.link}`;

    const compartir_facebook = document.querySelector('.compartir-facebook');
    compartir_facebook.href  = `https://www.facebook.com/share.php?u=${datosCompartirRedes.link}`;

    const compartir_twitter = document.querySelector('.compartir-twitter');
    compartir_twitter.href  = `https://twitter.com/share?&url=${datosCompartirRedes.link}%0A%0A&text=${datosCompartirRedes.msg}%0A%0A&hashtags=todointerconectado,desarrolloweb%0A&hashtags=javascript,programming`;

    const compartir_linkedin = document.querySelector('.compartir-linkedin');
    compartir_linkedin.href  = `https://www.linkedin.com/sharing/share-offsite/?url=${datosCompartirRedes.link}`;
}
containerCompartirEnRedesSociales();


// --------- Cambio del <TITLE> al salir de la pestaña de la página ---------
const containerTitleIntervalo = () => {
    const datosTitle = {
        'intervalo': 0,
        'titlePredetermined': 'Todointerconectado Tech web',
        'titleIntervalo': [
            '¡Te extrañamos...',
            'de Todointerconectado!'
        ],
        'delayMsj': 1100
    };

    const showMessagesInfinitely = (messages, delay) => {
        let index = 0;

        const updateTitle = () => {
            // Actualiza el texto de la etiqueta <title> con el mensaje actual
            document.title = messages[index];
            index++;
            if (index >= messages.length) {
                index = 0;
            }
        };

        // Muestra el primer mensaje inmediatamente
        updateTitle();

        return setInterval(updateTitle, delay);
    };

    const callShowMessagesInfinitely = () => {
        return showMessagesInfinitely(datosTitle.titleIntervalo, datosTitle.delayMsj);
    };

    window.addEventListener('visibilitychange', (e) => {
        if (document.hidden) {
            // La página está oculta (se cambió de pestaña)
            clearInterval(datosTitle.intervalo)
            datosTitle.intervalo = callShowMessagesInfinitely();
        } 
        else {
            // La página está visible nuevamente (se volvió a la pestaña)
            clearInterval(datosTitle.intervalo)
            document.title = datosTitle.titlePredetermined;
        }
    });

    // Iniciar el intervalo solo si la página está oculta inicialmente
    if (document.hidden) {
        datosTitle.intervalo = callShowMessagesInfinitely();
    }
}
containerTitleIntervalo();
