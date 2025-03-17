
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');
const buttonMenu = document.querySelector('.button-menu');

// Evento para abrir/cerrar menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    buttonMenu.classList.toggle('open'); // Cambia animación del botón
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        buttonMenu.classList.remove('open'); // Restablecer botón
    });
});


// Reloj

function actualizarReloj() {
    // Cambia el valor de 'timeZone' a la zona de tu ciudad.
    const opciones = {
      timeZone: 'America/Lima', // Ejemplo: 'America/Mexico_City'
      hour: '2-digit',
      minute: '2-digit',
      hour12: true 
    };

    // Obtenemos la hora actual en la zona horaria especificada
    const horaActual = new Date().toLocaleTimeString('es-ES', opciones);

    // Mostramos la hora en el elemento con id "reloj"
    document.getElementById('reloj').textContent = horaActual;
  }

  // Actualiza la hora cada segundo
  actualizarReloj();
  setInterval(actualizarReloj, 1000);






// copiar texto




  function copiarTexto() {
    var texto = document.getElementById("textoCopiar").innerText;
    
    navigator.clipboard.writeText(texto).then(function() {
      var mensaje = document.getElementById("mensajeCopiado");
      mensaje.style.display = "block"; // Muestra el mensaje

      setTimeout(function() {
        mensaje.style.display = "none"; // Oculta el mensaje después de 2 segundos
      }, 2000);
    }).catch(function(err) {
      alert("Error al copiar: " + err);
    });
  }


// -------------------------------------------------------
// animacion palabras desplazandose

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    document.getElementById("word-1").style.transform = `translateX(${scrollY * 0.2}px)`;
    document.getElementById("word-2").style.transform = `translateX(${-scrollY * 0.2}px)`;
    document.getElementById("word-3").style.transform = `translateX(${scrollY * 0.2}px)`;
})



/* cards flotantes*/

 // Detectar el scroll para activar las animaciones
 const items = document.querySelectorAll(".gallery-item");

 function checkScroll() {
     items.forEach(item => {
         const rect = item.getBoundingClientRect();
         if (rect.top < window.innerHeight - 50) {
             item.classList.add("visible");
         }
     });
 }

 window.addEventListener("scroll", checkScroll);
 checkScroll();