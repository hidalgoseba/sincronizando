// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}
const producto2 = new Producto('Monitor curvo 32" Samsung', 900, true);
const producto3 = new Producto("Laptop Toshiba", 1900, true);

// herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la revolucion', 250, '8545874132');

console.log(libro);
console.log(libro.formatearProducto());

console.log(producto2.formatearProducto());
console.log(producto3);