//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.//

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp//

let resultado = "";
let texto = prompt("Ingrese un texto (Cancelar para terminar):");

while (texto !== null) {
  if (resultado === "") {
    resultado = texto;
  } else {
    resultado = resultado + "-" + texto;
  }
  texto = prompt("Ingrese un texto (Cancelar para terminar):");

}
alert(resultado);