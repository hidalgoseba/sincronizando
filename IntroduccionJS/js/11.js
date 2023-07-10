const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//destructuring

const { precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);