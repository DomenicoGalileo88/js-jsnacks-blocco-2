/* 
Snack5 (Bonus)

Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Crea due array che hanno un numero di elementi diversi.

let longArray = ['Domenico', 'Luca', 'Luigi', 'Federica', 'Luisa', 'Antonella'];

let shortArray = ['Marco', 'Antonio', 'Alice', 'Martina'];

// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
let short = shortArray.length;

while (short < longArray.length){

    shortArray.push('Alessandro');

    shortArray++;
}

console.log(shortArray);