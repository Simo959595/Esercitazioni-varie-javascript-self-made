// ESERCIZIO 4
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Variante:
// Prova ad ordinali in modo crescente.

// ESECUZIONE

let serie1 = [3,5,1,8,6,9,10,7,2,4];
serie1.sort(function(a, b) {
  return b - a;
});
console.log(serie1);
let serie2 = [3,5,1,8,6,9,10,7,2,4];
serie2.sort(function(a, b) {
  return a - b;
});
console.log(serie2);
