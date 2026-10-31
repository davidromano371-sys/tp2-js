//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

//1
//12
//123
//1234
//12345
//123456
//……

const n = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (isNaN(n) || n < 1 || n > 50) {
  alert("Por favor, ingrese un número válido entre 1 y 50.");
} else {
  for (let i = 1; i <= n; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea = linea + j;
    }
    document.write(linea + "<br>");
  }
}