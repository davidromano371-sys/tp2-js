//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

//Ejemplo:

//Input: Hola mundo

//Output: la vocal ‘o’ está en la posición 1

const texto = prompt ("Introduce un texto:");

if (texto === null || texto.trim() === "") {
  alert("No se ha introducido ningún texto.");
} else {
  const minuscula = texto.toLowerCase();
  let posicion = 0;
  let encontrada = false;

  while (posicion < minuscula.length && !encontrada) {
    switch (minuscula.charAt(posicion)) {
      case "a":
      case "á":
      case "e":
      case "é":
      case "i":
      case "í":
      case "o":
      case "ó":
      case "u":
      case "ú":
        encontrada = true;
        break;
      default:
        posicion++;
    }
  }

  if (encontrada) {
    alert("la vocal '" + minuscula.charAt(posicion) + "' está en la posición " + posicion);
  } else {
    alert("No se ha encontrado ninguna vocal en el texto.");
  }
}