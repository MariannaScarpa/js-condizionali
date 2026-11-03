console.log("Progetto Benvenuto a Bordo");

//Creo due variabili, se sono verificate avrò un messaggio altrimenti ne avrò un'altro

/*
Input: creo due variabili, una per la presenza del biglietto e l'altra per l'età
Esecuzione: in base alle variabili avrò messaggi diversi 
Output: se maggiorenne con biglietto = Benvenuto, altrimenti altro testo
*/

//INPUT

let biglietto = false;
let età = 18;

//ESECUZIONE

if (biglietto == true) {
    if (eta >= 18) {
        //OUTPUT
        console.log("Biglietto Riconosciuto");
    } else {
        //OUTPUT
        console.log("Utente Minorenne");
    }

} else {
    //OUTPUT
    console.log("Dati Errati");
}

console.log("Fine Programma");