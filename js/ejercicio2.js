const nota = parseInt(prompt("Ingresá una nota de 0 a 10:"));

if (isNaN(nota)) {
  alert("Introduce un número válido");
} else if (nota < 0 || nota > 10) {
  alert("Numero fuera de rango. Introduce un número entre 0 y 10.");
} else {
  switch (nota) {
    case 0:
    case 1:
    case 2:
      alert("Muy deficiente");
      break;
    case 3:
    case 4:
      alert("Insuficiente");
      break;
    case 5:
    case 6:
      alert("Suficiente");
      break;
    case 7:
      alert("Bien");
      break;
    case 8:
    case 9:
      alert("Notable");
      break;
    case 10:
      alert("Sobresaliente");
      break;
  }
}