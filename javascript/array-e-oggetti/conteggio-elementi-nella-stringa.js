




// ESERCIZIO 3
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.



// ESECUZIONE
let numero = (prompt("immetti un numero intero"))
if(numero < 10){
    console.log("1 cifra")
 
}
else if(numero < 100){
    console.log("2 cifre")
}
else if(numero < 1000){
    console.log("3 cifre")
}
else if(numero >=12000){
    console.log("Numero troppo grande")
}