const slideContainer = document.querySelector('.carrusel-fondo');
const slides = document.querySelectorAll('.slide');

let counter = 0;
const totalSlides = slides.length;

function moveCarousel() {
    counter++;
    
    if (counter >= totalSlides) {
        counter = 0; // Regresa a la primera imagen
    }
    
    // Mide el ancho actual de la pantalla en píxeles
    const widthPantalla = window.innerWidth;
    
    // Desplaza el contenedor
    slideContainer.style.transform = `translateX(${-widthPantalla * counter}px)`;
}

// Ejecuta la función automáticamente cada 4 segundos
setInterval(moveCarousel, 4000);

// Opcional: Corrige la posición si el usuario cambia el tamaño de la ventana de golpe
window.addEventListener('resize', () => {
    const widthPantalla = window.innerWidth;
    slideContainer.style.transform = `translateX(${-widthPantalla * counter}px)`;
});

// Función para redirigir al juego 
function irAJuego() {
    window.open("https://m.mobilelegends.com/download", "_blank");
}

//funcion de cambio mitico
let imagenes = [
    "Imagenes/Mitico.png",
    "Imagenes/MiticoHonor.png",
    "Imagenes/MiticoGlory.png",
    "Imagenes/MiticoImmortal.png"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % imagenes.length;
    document.getElementById("mitico").src = imagenes[i];
}, 1000);