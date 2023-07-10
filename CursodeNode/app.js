// const { saludar, saludarHolaMundo } = require("./saludos.js");

// console.log(saludarHolaMundo());
// console.log(saludar('Sebastian'));

// console.log('Hola, Mundo')
// console.warn('Ocurrio un Error');

// console.error(new Error('¡Ocurrio un error!'))
//console.log(process);


// const os = require('os');

// console.log(os.type());
// console.log(os.homedir());

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 3000, 'Node.js');

function sumar(a, b) {
    console.log(a+b);
}
setTimeout(sumar, 2500, 5, 6);