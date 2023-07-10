// this

const reservacion = {
    nombre: 'Sebastian',
    apellido: 'Hidalgo',
    total: 5000,
    pagado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su monto a pagar es ${this.total}`)
    }
}

const reservacion2 = {
  nombre: "Juan Cruz",
  apellido: "Hidalgo",
  total: 5000,
  pagado: true,
  informacion: function () { // si aca intento utilizar arrow function me va a dar undefined porque hace referencia a la variable global window.nombre
    console.log(
      `El cliente ${this.nombre} reservo y su monto a pagar es ${this.total}`
    );
  },
};
reservacion.informacion();
reservacion2.informacion();