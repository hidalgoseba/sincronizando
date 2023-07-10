// metodos de propiedades

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo musica con el ID: ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlayList: function (nombre) {
    console.log(`Creando la PLayList: ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`Reproduciendo la PLayList: ${nombre}`);
  },
};
//tambien podemos agregar por fuera porque es un objeto
reproductor.borrarCancion = function(id) {
    console.log(`Borrando cnacion con el ID: ${id}`);
}

console.log(reproductor);

reproductor.reproducir(3850);
reproductor.pausar();
reproductor.borrarCancion(25);
reproductor.crearPlayList('Rock');
reproductor.reproducirPlayList('Rock');