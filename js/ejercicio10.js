//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//Ejercicios con Math

const filas = parseInt(prompt("Ingrese el número de filas:"));
const columnas = parseInt(prompt("Ingrese el número de columnas:"));

if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
  alert ("Por favor, ingrese números válidos mayores a 0.");
} else {
  let contador = filas * columnas;

  document.write("<table border='1'>");
  for (let i = 1; i <= filas; i++) {
    document.write("<tr>");
    for (let j = 1; j <= columnas; j++) {
      document.write("<td>" + contador + "</td>");
      contador--;
    }
    document.write("</tr>");
  }
  document.write("</table>");
}