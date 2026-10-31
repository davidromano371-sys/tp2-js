//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

//303030303030303030303030303030303030303030303030303030303030
//2929292929292929292929292929292929292929292929292929292929
//2828282828282828282828282828282828282828282828２８２８２８２８
//…..
//333
//２２
//1

const n = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (isNaN(n) || n < 1 || n > 50) {
  alert("Por favor, ingrese un número válido entre 1 y 50.");
} else {
  for (let i = n; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea = linea + i;
    }
    document.write(linea + "<br>");
  }
}