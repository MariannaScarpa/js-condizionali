console.log("Programma Saluto/Errore");

//Se l'utente inserisce il suo nome verrà salutato altrimenti ci sarà errore

/*
Input: nome inserito dall'utente
Esecuzione:in base al contenuto inserito dall'utente si avrà una riposta differente
Output: saluto o messaggio di errore
*/


//INPUT

let nome = prompt("Inserisci il tuo nome");
console.log(`L'utente ha inserito il nome:${nome}`);

//ESECUZIONE

if (nome) {
    //OUTPUT
    console.log(`Benvenuto ${nome}!`);
} else {
    //OUTPUT
    console.log("Nome non conforme")
}


console.log("Fine Programma")