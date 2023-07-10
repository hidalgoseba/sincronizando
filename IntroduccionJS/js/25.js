const carrito = [
  { nombre: "Monitor 20 puladas", precio: 500 },
  { nombre: "Tv 50 puladas", precio: 800 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 50 },
  { nombre: "Teclado", precio: 10 },
  { nombre: "Celular", precio: 1000 },
  { nombre: "Notebook", precio: 1500 },
];

// ForEach
// carrito.forEach( producto => console.log(producto.nombre));  // utilizar cuando mostramos en pantalla o html 
const arreglo1 = carrito.forEach((producto) => producto.nombre);
//Map
// carrito.map((producto) => console.log(producto.nombre));   // lo utilizamos cuando creamos un nuevo arreglo
const arreglo2 = carrito.map((producto) => producto.nombre);

console.log(arreglo1);
console.log(arreglo2);