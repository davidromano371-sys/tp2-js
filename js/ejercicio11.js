//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

//Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const nombre1 = prompt("Nombre de la persona 1:");
const edad1 = parseInt(prompt("Edad de " + nombre1 + ":"));
const nombre2 = prompt("Nombre de la persona 2:");
const edad2 = parseInt(prompt("Edad de " + nombre2 + ":"));
const nombre3 = prompt("Nombre de la persona 3:");
const edad3 = parseInt(prompt("Edad de " + nombre3 + ":"));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
    alert("Por favor, ingrese edades válidas.");
} else {
    const mayor = Math.max(edad1, edad2, edad3);

    if (edad1 === mayor) {
      alert("El mayor es " + nombre1);
    } else if (edad2 === mayor) {
      alert("El mayor es " + nombre2);
    } else {
      alert("El mayor es " + nombre3);
    }
}