// string o cadenas de texto

const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');
const email = 'correo@correo.com';


// length e spara la extension
console.log(typeof producto);
console.log(producto2.length);
console.log(producto3);

// IndexOf
console.log(producto.indexOf('Monitor'));
console.log(producto2.indexOf('Tablet'));
console.log(producto3);

//includes retorna true o false
console.log(producto.includes("Monitor"));
console.log(producto2.includes("Tablet"));

