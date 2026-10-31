let suma = 0
let texto = prompt("Ingrese un número (Cancelar para terminar):");

while (texto !== null) {
  const numero = parseFloat(texto);
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
  } else {
    suma = suma + numero;
  }
  texto = prompt("Ingrese un número (Cancelar para terminar):");
}

alert("La suma de los números ingresados es: " + suma);