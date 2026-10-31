//15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Introduce un texto:");

if (texto === null || texto.trim() === "") {
  alert("No se ha introducido ningún texto.");
} else {
  const minuscula = texto.toLowerCase();
  let cantidad = 0;

  for (let i = 0; i < minuscula.length; i++) {
    switch (minuscula.charAt(i)) {
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
        cantidad++;
        break;
    }
  }
  alert("El txto tiene " + cantidad + " vocales.");
}