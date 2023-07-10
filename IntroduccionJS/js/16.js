// Declaracion de la funcion

function sumar() {
    console.log(10 + 10);
}

sumar();

// expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE SE MANDAN A LLAMAR SOLAS SE UTILIZAN EN JQUERY
(function() {
    console.log('Esto es una funcion');
})();