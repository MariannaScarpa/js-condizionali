console.log("Staza Libera/Occupata");

//In base alle variabili inserite si capirà se la stanza è occupata o no grazie agli operatori logici

/*
Input: variabili luci accese e persone presenti
Esecuzione: con gli operatori logici capire se le variabili sono verificate
Output: messaggio con scritto se la stanza è libera o occupata
*/

//INPUT

let luci_accese = true;
let persone_presenti = true;

//Esecuzione

if (luci_accese === true && persone_presenti === true) {
    //OUTPUT
    console.log("Non puoi entrare, la stanza è occupata");
}

if (luci_accese === false && persone_presenti === false) {
    //OUTPUT
    console.log("Entra pure, la stanza è libera");
}

console.log("Fine Programma");