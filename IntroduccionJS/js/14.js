// arreglos o array

const numeros = [10,20,30,40,50];

console.table(numeros);

// se puede crear array con el constructor

// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// const arreglo = ["Hola", 10, true, null, {nombre: "Sebastian", trabajo: "Programador"}, [1,2,3]];
// console.log(arreglo);

//acceder a los valores de un arreglo

// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[15]);

//conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero) {
//     console.log(numero);
// })

numeros.push(60, 70, 80); //agregar al final del arreglo
numeros.unshift(-10, -20, -30); //agrega al inicio del arreglo

console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// meses.pop(); //elimina el ultimo elemento del arreglo
// meses.shift(); // elimina el primer elemento del arreglo
// numeros.splice(2, 1);

//rest operator o spreed operator

const nuevoArreglo = [...meses, 'Junio']; // ['Junio', ...meses] de sta manera lo agrega al inicio

console.table(nuevoArreglo);
