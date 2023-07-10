// POO programacion orientada a objetos

// Object literal

const producto = {
    nombre: 'tablet',
    precio: 500
}

// Objetc constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

 function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo 32" Samsung', 900, true);
const producto3 = new Producto('Laptop Toshiba', 1900, true);
const producto4 = new Producto('Celular Moto', 1100, true);
const producto5 = new Producto("Smartwatch xiaomi", 500, true);
const cliente = new Cliente('Sebastian', 'Hidalgo');


console.log(producto2);
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());
console.log(cliente.formatearCliente());
console.log(cliente);