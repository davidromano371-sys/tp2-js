//Ejercicios con String

//13- Realiza un script que pida un texto y lo muestre en mayúsculas.

const texto = prompt("Ingrese un texto:");
if (texto === null || texto === "") {
    alert("No ingresó ningún texto.");
} else {
    alert(texto.toUpperCase());
}