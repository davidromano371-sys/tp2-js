const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

let entrada = prompt("Ingrese un número de DNI (Cancelar para terminar):");

while (entrada !== null) {
  const dni = parseInt(entrada);
  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("Por favor, ingrese un número de DNI válido entre 0 y 99999999.");
  } else {
    const resto = dni % 23;
    alert("La letra es: " + letras.charAt(resto));
  }
  entrada = prompt("Ingrese un número de DNI (Cancelar para terminar):");
}