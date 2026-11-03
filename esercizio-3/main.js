console.log("Progetto Ciao Città!")

//L'utente inserisce il nome della sua città e in risposta avremmo un saluto

/*
Input: l'utente inserisce il nome della propria città, salvo il dato in una variabile
Esecuzione: con in nome della città creo una frase di saluto
Output: frase di saluto per la città in questione
*/

//INPUT
let nome_città = prompt("Inserisci il nome della tua città", "Novara");
console.log(`L'utente ha inserito:${nome_città}`);

//ESECUZIONE

if (nome_città) {
    //OUTPUT
    console.log(`Ciao ${nome_città}, come sei bella!`)
} else {
    //OUTPUT
    console.log("Città mancante!")
}

console.log("Fine Progetto!")
