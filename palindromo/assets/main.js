//** Palidroma  */

//** Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


//** chiedo all'utente di inserire una parola */
var userWord = prompt("Inserisci una parola");

//** Creo la funzione che verificherà che la prola inserita dall'utente sia palindroma o no */


function palindromo() {
    // Dichiaro una nuova variabile e la rendo uguale alla parola inserita dall'utente, dividendola, mettendola al contrario per poi riunirla.
    var newWord =  userWord.split("").reverse().join("");
    // ora con un ciclo if else, non mi resta altro che confrontare le due parole.
    if(newWord === userWord){
        console.log("E' un palindromo")
    }else{
        console.log("Non è un palindromo")
    }
}

    //Ora invoco la funzione.
palindromo(userWord);