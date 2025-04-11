
// ESERCIZIO 5:
// Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:
// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// dovra’ restituire come risultato, let newArray = [50, 70, 90]

// ESECUZIONE

// VARIANTE 1
let numbers1 = [10, 20, 30];
let numbers2 = [40, 50, 60];
let somma1 = (numbers1[0] + numbers2[0])
let somma2 = (numbers1[1] + numbers2[1])
let somma3 = (numbers1[2] + numbers2[2])
let newArray = somma1 + somma2 + somma3;{
    console.log (somma1,somma2,somma3)
}
// VARIANTE 2
let numbers3 = [10, 20, 30];
let numbers4 = [40, 50, 60];
console.log(numbers3[0] + numbers4[0], numbers3[1] + numbers4[1], numbers3[2] + numbers4[2]);
