//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt("Ingrese un texto: ");

if (texto === null || texto.trim() === "") {
  alert("No se ingresó ningún texto.");
} else {
  let alReves = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    alReves = alReves + texto.charAt(i);
  }
  alert(alReves);
}