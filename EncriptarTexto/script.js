const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(palabra) {
    let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    ];

    palabra = palabra.toLowerCase();

    for (let i = 0; i < codigoMatriz.length; i++) {
      if(palabra.includes(codigoMatriz[i][0])) {
        palabra = palabra.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
      }
    }
    return palabra;
}

function desencriptar(palabra) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  palabra = palabra.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (palabra.includes(codigoMatriz[i][1])) {
      palabra = palabra.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);
    }
  }
  return palabra;
}