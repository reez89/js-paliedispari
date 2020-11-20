// **Pari e Dispari
// 
// 
// 
// 

// FACCIO SCEGLIERE ALL'UTENTE PARI O DISPARI
var scelta = prompt("Pari o Dispari [P/D]");
console.log(scelta);
// FACCIO SCEGLIERE ALL'UTENTE UN NUMERO
var number = Number(prompt("Scegli un numero da 1 a 5"));
console.log(number);

// CREO LA FUNZIONE PER GENERARE UN NUMERO RANDOM
function randomNumber(){
    var pcNumber = Math.floor(Math.random() * (5 - 1) + 1)
    return Number(pcNumber);
}

// SOMMO I NUMERO OTTENUTI DALLA FUNZIONE RANDOM E DALL'UTENTE
var pcChoice;
var sum = number + randomNumber(Number(pcChoice));
console.log(pcChoice);
console.log(sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOdd(){
    if(sum % 2 == 0 && scelta=="P"){
        true;
        // Dichiariamo chi ha vinto.
        console.log("HAI VINTO")
    } else if(sum % 3 != 0 && scelta=="D"){
        console.log("HAI VINTO");
    }
    else {
        // Dichiariamo chi ha vinto.
        console.log("IL BANCO VINCE!")
    }P
}

evenOdd(sum);