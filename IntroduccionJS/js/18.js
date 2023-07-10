function sumar(numero1 = 0, numero2 = 0) { // numero1, 2 parametros de una funcion se utilizan como variables del cuerpo de la funcion. es buneo q tengan parametros x default en este caso igual a 0
  console.log(numero1 + numero2);
}

sumar(15, 5); // argumentos o valores reales
sumar(5, 3);
sumar(1);

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};

sumar2(5, 5);
