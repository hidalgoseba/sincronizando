//for loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`El numero ${i}, es PAR`);
//     } else {
//         console.log(`El numero ${i}, es IMPAR`);
//     }
// }
const carrito = [
  { nombre: "Monitor 20 puladas", precio: 500 },
  { nombre: "Tv 50 puladas", precio: 800 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 50 },
  { nombre: "Teclado", precio: 10 },
  { nombre: "Celular", precio: 1000 },
  { nombre: "Notebook", precio: 1500 },
];
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// while loop

// let i = 0;  // indice o valor inicial

// while(i <= 100) {   // condicion

//     if(i % 2 === 0) {
//         console.log(`El numero ${i}, es PAR`)
//     } else {
//         console.log(`El numero ${i}, es IMPAR`);
//     }

//     i++;  // incremento
// }


// do while loop     la dife entre while y do while es que este ultimo se va a ejecutar minimo una vez aunque la condicion no se cumpla. mientras q el otro si no cumple la codicion no ejecuta el codigo

let i = 100;

do {
    console.log(i)

    i++;
} while (i < 10)
