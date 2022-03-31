/* 
Snack4

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/


//Crea un array di numeri interi

let numeri = [10, 20, 2, 6, 5, 7, 3];

//fai la somma di tutti gli elementi che sono in posizione dispari

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    const element = numeri[i];
    
    if (numeri.indexOf(element) % 2 !== 0) {
        somma += element;
    }
}
console.log(somma);
let risultato = document.querySelector('.somma').innerHTML = `La somma dei numeri in posizione dispari dell'array è: ${somma}`

