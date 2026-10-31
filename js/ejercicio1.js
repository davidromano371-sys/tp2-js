// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un numero valido indicarlo en un mensaje//

const edad = parseInt(prompt("Por favor, ingresa tu edad:"));

if (!isNaN(edad) && edad >= 0) {
    if (edad >= 18) {
        alert("Ya puedes conducir.");
    } else {
        alert("Aún no puedes conducir.");
    }
} else {
    alert("La edad ingresada no es un número válido.");
}