let intentos =  6;
let palabra = "APPLE"; 
window.addEventListener('load', init)
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value; 
button.addEventListener("click", intentar);

function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

function intentar() {
    const INTENTO = leerIntento();
   if (INTENTO === palabra) {
    terminar("<h1>¡GANASTE!😀</h1>")
    return
   }
   for (let i in palabra) {
    if (INTENTO[i] === palabra[i]) {
        console.log(INTENTO[i], "VERDE")
    } else if ( palabra.includes(INTENTO[i])) {
        console.log(INTENTO[i], "AMARILLO")
    } else {
        console.log(INTENTO[i], "GRIS")
    }
   }
        intentos--
        if (intentos===0) {
            terminar("<h1>¡PERDISTE!😖</h1>")
        }
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

