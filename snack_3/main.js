/* 
Snack3

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/


// Il Grande Gatsby ha una lista di nomi e una lista di cognomi

let nameList = ['Domenico', 'Alessio', 'Luigi', 'Gabriella', 'Francesca', 'Veronica'];

let lastNameList = ['Galileo', 'Rossi', 'Esposito', 'Gaudino', 'Capasso', 'Cantile'];

// Da queste vuole generare una falsa lista di invitati con nome e cognome.

for (i = 0; i < nameList.length; i++){

    let randomName = Math.floor(Math.random() * nameList.length);
    let randomLastName = Math.floor(Math.random() * lastNameList.length);
    let falseList = `${nameList[randomName]}  ${lastNameList[randomLastName]}`;

    console.log(falseList);
};


