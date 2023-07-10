// arrow functions

const sumar2 = (n1, n2) => console.log( n1 + n2 );  //cuando es una linea se pueden sacar las llaves

sumar2(10, 5);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo('JavaScript');

//arrays methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  { nombre: "Monitor 20 puladas", precio: 500 },
  { nombre: "Tv 50 puladas", precio: 800 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 50 },
  { nombre: "Teclado", precio: 10 },
  { nombre: "Celular", precio: 1000 },
  { nombre: "Notebook", precio: 1500 }
];

//foreach itera sobre cada elemento del array

meses.forEach( mes => {

    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// some se utiliza para arreglos de objetos
const resultado2 = carrito.some( producto => producto.nombre === 'reloj'); //sin arrow function
console.log(resultado2);

// reduce obtiene el total del arreglo
const resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0); //con arrow function
console.log(resultado3);

//filter
resultado = carrito.filter( producto => producto.precio > 500);
resultado = carrito.filter( producto => producto.nombre !== 'Celular');
 console.log(resultado);

