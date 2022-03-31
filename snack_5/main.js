/* 
Snack5 (Bonus)

Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Crea due array che hanno un numero di elementi diversi.

let arrayUno = ['Domenico', 'Luca', 'Luigi', 'Federica', 'Luisa', 'Antonella'];

let arrayDue = ['Marco', 'Antonio', 'Alice', 'Martina'];

let short;
let long;

// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
if (arrayUno.length > arrayDue.length) {
    short = arrayDue;
    long = arrayUno;
} else {
    long = arrayDue;
    short = arrayUno;
}


while (short.length < long.length){

    short.push('Alessandro');
    
    short++;
}

console.log(short);






/* let short = shortArray.length; */


/* while (short < longArray.length){

    shortArray.push('Alessandro');

    short++;
}

console.log(shortArray); */