console.log("Programma Saluto Orario v0.1")

//Programma per indicare le fasi della giornata in base all'ora indicata dall'utente

/*
Input: l'utente inserisce l'orario
Esecuzione: creo diversi step di orari
Output: in base all'orario inserito stampa un saluto
*/

//INPUT

let ora = prompt("Inserisci l'ora attuale");
console.log(`L'utente ha inserito:${ora}`);

//ELABORAZIONE
if (ora < 0 || ora > 23) {
    //OUTPUT
    console.log("Orario Errato");
} else if (ora <= 12) {
    //OUTPUT
    console.log("Buongiorno!");
} else if (ora <= 18) {
    //OUTPUT
    console.log("Buon Pomeriggio!");
} else {
    //OUTPUT
    console.log("Buonasera!");
}

console.log("Fine Programma");
