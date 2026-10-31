//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const texto = prompt("Ingrese un texto:");
if (texto === null || texto === "") {
    alert("No ingresó ningún texto.");
} else {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
      if (i > 0) {
          resultado = resultado + "-";
      }
      resultado = resultado + texto.charAt(i);
    }

    alert(resultado);
}