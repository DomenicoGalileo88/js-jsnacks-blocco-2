/* 
Snack2

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 */


//Inserisci un numero
let numero = parseInt(prompt('Inserisci un numero'));
let risultato = document.querySelector('.risultato');

// definisco un numero dispari
if (numero % 2 !== 0){
    //se è dispari stampa il numero successivo
    console.log(`Numero dispari: ${numero} Il numero successivo è: ${numero + 1}`);
    risultato.innerHTML = `Numero dispari: ${numero} Il numero successivo è: ${numero + 1}`;
} else {
    //se è pari stampa il numero
    console.log(`Numero pari: ${numero}`);
    risultato.innerHTML = `Numero pari: ${numero}`;
}

