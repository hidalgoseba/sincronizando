const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
    peso: "1kg",
    altura: "1m"
};

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);