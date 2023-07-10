const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); //.freeze no te permite agregar borrar ni modificar el objeto   .seal la diferencia es q si te permite modificar pero no agregar ni eliminar

producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));
console.log(producto);