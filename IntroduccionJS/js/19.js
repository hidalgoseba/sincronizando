// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);
// console.log(resultado);

let total = 0;

function agregarCarrito (precio) {
    return total += precio;  // += forma de hacer incremento
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(300);
total = agregarCarrito(400);
total = agregarCarrito(500);

console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log({totalAPagar});
console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);