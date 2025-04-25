document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav__toggle');
    const navResponsive = document.querySelector('.nav__responsive-ul');
    const header = document.querySelector('header');

    navToggle.addEventListener('click', function () {
        navResponsive.classList.toggle('active');
        header.classList.toggle('hide-nav');
    });

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;

        if (scrollTop > 0 && !navResponsive.classList.contains('active')) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });

    function cerrarNavegacion() {
        navResponsive.classList.remove('active');
        header.classList.remove('hide-nav');
    }

    // Asigna la función al evento click del enlace "Contacto"
    const contactoEnlace = document.querySelector('.nav__responsive-li a[href="#contacto"]');
    contactoEnlace.addEventListener('click', function (event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
        cerrarNavegacion();
        // Luego, puedes agregar cualquier lógica adicional que necesites, como desplazarte a la sección "Contacto"
        window.location.href = contactoEnlace.getAttribute('href');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const joyasSlider = document.querySelector('.joyas-slider');
    let currentIndex = 0;
    let itemWidth = joyasSlider.firstElementChild.offsetWidth + 0; // Ancho del item + margen

    // Obtener referencias a los botones de flecha
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');

    function nextImage() {
        currentIndex = (currentIndex + 1) % joyasSlider.children.length;
        joyasSlider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        updateButtonsState();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + joyasSlider.children.length) % joyasSlider.children.length;
        joyasSlider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        updateButtonsState();
    }

    function updateButtonsState() {
        // Habilitar/deshabilitar el botón de la izquierda al llegar al inicio
        prevButton.disabled = currentIndex === 0;
        // Habilitar/deshabilitar el botón de la derecha al llegar al final
        nextButton.disabled = currentIndex === joyasSlider.children.length - 1;
    }

    window.addEventListener('resize', function () {
        itemWidth = joyasSlider.firstElementChild.offsetWidth + 20;
        joyasSlider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    });

    // Inicialmente, deshabilitar el botón izquierdo
    prevButton.disabled = true;
   
    
    // Asignar las funciones a las variables globales para que sean accesibles desde el HTML
    window.nextImage = nextImage;
    window.prevImage = prevImage;
});
document.addEventListener('DOMContentLoaded', function () {
    const fixedCenter = document.getElementById('fixedCenter');
    let isFixedVisible = false;

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        // Muestra u oculta el contenedor fijo según la dirección del desplazamiento
        if (scrollY > 600 && !isFixedVisible) {
            fixedCenter.classList.add('show');
            isFixedVisible = true;
            
        } else if (scrollY <= 600 && isFixedVisible) {
            fixedCenter.classList.remove('show');
            isFixedVisible = false;
        }
       
    });
});

var whatsappChat = document.createElement('div');
whatsappChat.className = 'whatsapp-chat';
whatsappChat.innerHTML = `
    <a href="https://api.whatsapp.com/send?phone=959414178" target="_blank">
        <img src="ruta/a/tu/icono-de-whatsapp.png" alt="Icono de WhatsApp">
        <span>Chatea con nosotros</span>
    </a>
`;
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".famosos-slider");
    const dots = document.querySelectorAll(".dot");
    let counter = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            counter = index;
            updateSlider();
        });
    });

    function updateSlider() {
        const size = slider.clientWidth;
        slider.style.transform = `translateX(${-size * counter}px)`;
        setActiveDot();
    }

    function setActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === counter);
        });
    }

    window.addEventListener("resize", updateSlider);

    updateSlider(); // Asegurarse de que se actualice al cargar la página
});
