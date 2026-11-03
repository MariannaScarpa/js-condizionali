console.log("Progetto Confronto Stretto e Debole");

//Confronto tra stringa numerica e numero con uguaglianza e identità

/*
Input: creo una stringa con dei numeri
Esecuzione: confronto la stringa prima utilizzando l'uguaglianza e in seguito l'identità
Output: messaggio diverso in base al confronto
*/


//INPUT

let codice = ("1234");

//ESECUZIONE

if (codice == 1234) {
    console.log("Uguaglianza verificata: il codice è corretto");
}

if (codice === 1234) {
    console.log("Identità verificata: il codice è verificato");
} else {
    console.log("Identità Errata");
}

console.log("Fine Programma");