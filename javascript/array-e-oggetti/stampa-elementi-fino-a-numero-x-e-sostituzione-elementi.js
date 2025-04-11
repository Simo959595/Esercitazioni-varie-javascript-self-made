// ESERCIZIO 2
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'
// ESECUZIONE
 let stringa1 = "Fizz";
 let stringa2 = "Buzz";
 let stringa3 = "FizzBuzz";
let N = 100
 for  (let i = 1; i <= N; i++){
 if (i % 15 == 0){ 
     console.log(stringa3)   
    }else if (i % 5 == 0) {
     console.log(stringa2)   
     }else if(i % 3 == 0){
     console.log(stringa1)
    }else {
     console.log(i)  
    }
    }
   