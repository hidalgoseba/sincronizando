const metodoPago = 'tarjeta';

switch (metodoPago) {
  case "tarjeta":
    console.log("estas utilizando pago con tarjeta");
    break;
  case "efectivo":
    console.log("Pagaste en efectivo");
    break;
  case "cheque":
    console.log("Pagaste con cheque, agurade la verificacion de fondos");
    break;
  default:
    console.log("Aun no has pagado");
    break;
}