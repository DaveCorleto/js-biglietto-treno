// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

//Chiedo all'utente il numero di chilometri che deve percorrere

// Chiedo all'utente la sua età 

// Calcolo il prezzo senza sconti che sarà numero di km * 0,21 euro 

//Se l'utente ha tra 0 e 17 anni il prezzo
// andrà ridotto del 20% 

//Se l'utente ha più di 65 anni il prezzo
// andrà ridotto del 40% 

const userKm = parseInt (prompt('inserisci i Km che devi percorrere'));
const userAge = parseInt (prompt('inserisci la tua età in numero'));

const normPrice =  (userKm * 0.21);
const price20 = ((userKm * 0.21)*0.8); 
const price40 = ((userKm * 0.21)*0.6); 

let price;

if (userAge < 18) {
    price = price20
}

else if (userAge > 65) {
    price = price40;
}

else  {
    price = normPrice;
}

// Convertire il prezzo in euro e centesimi... 

const formattedPrice = `${Math.floor(price)} euro e ${(price % 1 * 100).toFixed(0)} centesimi`;



console.log(price);

document.getElementById("price").innerHTML = 'Il prezzo del tuo biglietto è: ' + formattedPrice;
 


