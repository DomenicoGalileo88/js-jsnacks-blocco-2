/* 
Snack5 (Bonus)

Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Crea due array che hanno un numero di elementi diversi.

let arrayUno = ['Domenico', 'Luca', 'Luigi', 'Federica', 'Luisa', 'Antonella'];

let arrayDue = ['Marco', 'Antonio', 'Alice', 'Martina'];



// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

//dichiato due variabili per utilizzarle nel controllo della lunghezza dell'array
let short;
let long;

// controllo lunghezza array

if (arrayUno.length > arrayDue.length) {
    short = arrayDue;
    long = arrayUno;
} else {
    long = arrayDue;
    short = arrayUno;
}

// stampo per verificare quale è l'array corto e quale quello lungo
console.log(short);
console.log(long);

// aggiungo un nome fino a quando la lunghezza dell'array corto è uguale alla lunghezza dell'array lungo

while (short.length < long.length){

    short.push('Alessandro');
}

// stampo l'array corto per verificare l'inserimento dei valori

console.log(short);