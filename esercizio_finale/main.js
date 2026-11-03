console.log("Programma Finale");

/*
Input:nome ed età dell'utente
Esecuzione: inserire i dati in due variabili 
Output: Messaggio per salutare l'utente, in caso di nome non valido messaggio di errore,
messaggio che indica se l'utente è maggiorenne o minorenne
*/

//INPUT

let nome = prompt("Inserisci il tuo nome");
let età = prompt("Inserisci la tua età");

//ESECUZIONE

if (nome) {
    //OUTPUT
    console.log(`Ciao ${nome}`);
    if (età >= 18) {
        //OUTPUT
        console.log("-Maggiorenne");
    } else {
        //OUTPUT
        console.log("-Minorenne");
    }
} else {
    //OUTPUT
    console.log("Nome non valido");
}

console.log("Fine Programma");