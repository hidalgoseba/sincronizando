// const puntaje = 1000;

// if(puntaje === 1000) {
//     console.log('Si el puntaje es 1000');
// } else {
//     console.log('No es igual')
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito) {
//     console.log('El usuario puede pagar el producto');
// } else {
//     console.log('Saldo Insuficiente');
// }


const rol = "ADMINISTRADOR";

if(rol === 'ADMINISTRADOR') {
    console.log('Tienes acceso a todo el sitio')
} else if (rol === 'EDITOR') {
    console.log('Eres editor tienes acceso restringido')
} else {
    console.log('Eres visitante no tienes acceso')
}