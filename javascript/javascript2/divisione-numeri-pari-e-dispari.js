// VISUALIZZAZIONE DI SOLI NUMERI PARI E VISUALIZZAZIONE DELLA MEDIA DEI NUMERI DISPARI (IN QUESTO CASO FINO A 20)


let numero = 1
let numeriDispari = 0
let counter = 0
let media


for (let i = 1; i<=20; i++) 
    { 
    if (i % 2 == 0) {
        console.log(i)   
}
else 
{
numeriDispari = numeriDispari + i;
counter++
}
}
media = numeriDispari / counter
console.log("la media dei numeri dispari è" + " " + media)

 
