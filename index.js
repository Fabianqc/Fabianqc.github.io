const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")


document.getElementById("no").addEventListener("click", function() {
    // Obtener el ancho y alto de la ventana
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    // Calcular una posición aleatoria
    let randomX = Math.random() * (windowWidth - this.clientWidth);
    let randomY = Math.random() * (windowHeight - this.clientHeight);
    
    // Mover el botón a la nueva posición
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
});



const emojis = ["❤️", "😘", "😍", "🍕", "🫂"]; // Emojis para la lluvia
const container = document.getElementById('Div_Principal');
const emojiCount = 50; // Número de emojis

function createEmoji() {
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emojiElement.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    emojiElement.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración de la animación
    emojiElement.style.fontSize = Math.random() * 2 + 1 + 'rem'; // Tamaño aleatorio

    container.appendChild(emojiElement);

    // Eliminar el emoji del DOM cuando la animación termine
    emojiElement.addEventListener('animationend', () => {
        emojiElement.remove();
    });
}

// Crear un emoji cada 300ms



document.getElementById("si").addEventListener("click", function() {
 if (h2.textContent=="¿me dedicarias un poco de tu tiempo?👀"){
    h2.textContent = "Siii!!?? No Te Arrepentiras "
 }else if (h2.textContent == "Siii!!?? No Te Arrepentiras "){
    h2.textContent="Espero te guste muchisimo"
 }else if (h2.textContent=="Espero te guste muchisimo"){
    h1.textContent="Te amo mucho ❤️"
    h2.textContent="Quiero que sepas que me equivoque y se que no fue facil para ti y aun no lo es pero te quiero pedir perdon. Eres lo mejor y lo mas importante que he tenido en mi vida y no te quiero perder, te amo mucho y pase lo que pase simpre estaremos juntos y ahora luchare mucho mas por eso que antes, te amo demasiado representas muchas cosas para mi y eres lo mejor que me ha pasado en la vida, eres mi vida\n \n  vamos a ir a come pizzita hoy a las 6:00pm  "
 }else if (h1.textContent == "Te amo mucho ❤️"){
    h2.textContent="a comer pizza njdssss"
    setInterval(createEmoji, 30);
 }
});