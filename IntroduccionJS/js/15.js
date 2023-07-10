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

meses.forEach(function(mes) {

    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// includes se utiliza para arreglos planos como el de meses
let resultado = meses.includes('Marzo');
// console.log(resultado);

// some se utiliza para arreglos de objetos

const resultado2 = carrito.some(function(producto) {  //sin arrow function
    return producto.nombre === 'reloj';
});

console.log(resultado2);

// reduce obtiene el total del arreglo
const resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0); //con arrow function

console.log(resultado3);

//filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 500;
});

resultado = carrito.filter(function (producto) {
  return producto.nombre !== 'Celular';
});

 console.log(resultado);
