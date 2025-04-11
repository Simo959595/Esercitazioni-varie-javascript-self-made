// ESERCIZIO 1:
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. 
// Esempio: let array = [1, 5 ,7 ,12]; Output = 25; 


// let numericasuali = [10,22,3,6,54,21,9,2]

// let sommaArray = numericasuali.reduce((acc, num) => acc + num,0)

// console.log(sommaArray)



// ESERCIZIO 2:
// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media.
// Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2] 





// let numericasuali = [3,5,10,2,8]

// let sommaArray = numericasuali.reduce((acc, num) => acc + num,0)

// let media = sommaArray / numericasuali.length;

// console.log("la media"+" " + "è" + " " + media)

// console.log("i numeri più piccoli sono i seguenti:")

// if(numericasuali[0] < media){
//      console.log(numericasuali[0])
// }
// if(numericasuali[1] < media){
//     console.log(numericasuali[1])
// }
// if(numericasuali[2] < media){
//     console.log(numericasuali[2])
// }
// if(numericasuali[3] < media){
//     console.log(numericasuali[3])
// }
// if(numericasuali[4] < media){
//     console.log(numericasuali[4])
// }
// if(numericasuali[5] < media){
//     console.log(numericasuali[5])
// }
// if(numericasuali[6] < media){
//     console.log(numericasuali[6])
// }



// ESERCIZIO 3:
// Scrivi un programma che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare una delle seguenti operazioni:  addizione, sottrazione, moltiplicazione, divisione e di eseguire il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio. 
// Esempio: 
// Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" 
// Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]


// let numeri1 = [10,22,4,6,2,20]
// let numeri2 = [5,11,2,3,1,10]
// function operazione (arr1,arr2,operatore){
//     let result =[];
//     arr1.forEach((element,index) => {
//         if (operatore == "addizione"){
//             result.push (element+arr2[index])
//         }
//         else if (operatore == "sottrazione"){
//             result.push (element-arr2[index])
//         }
//     });
// return result
// }
// console.log(operazione(numeri1,numeri2,"addizione"));


// let numeri3 = [10,22,4,6,2,20]
// let numeri4 = [5,11,2,3,1,10]

// let sommaArray3 = numeri3.reduce((acc, num) => acc + num,)
// let sommaArray4 = numeri4.reduce((acc, num) => acc + num,)
// console.log(sommaArray3+sommaArray4)



// ESERCIZIO 4:
//  Scrivere un programma che permetta di filtrare soltanto le parole all’interno di un array: 
// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’] il risultato dovrà dare,
// let filtered = [‘hackademy’, ‘Javascript’, ‘php’]
// HINT: provate a filtrare in base al tipo di dato (operatore typeof) oppure puoi utilizzare il metodo .includes()

let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php']

let filtered = mixArray.filter(item => typeof item === 'string')    //esercizio 4

let filtered2 = mixArray.filter(item => typeof item === 'number')   //extra

let filtered3 = mixArray.filter(item => typeof item === 'boolean')  //extra

console.log(filtered)  //esercizio4

console.log(filtered2) //extra

console.log(filtered3) //extra



// RUBRICA
// Replicare l'oggetto smartphone visto a lezione e provare ad implementare il medoto "rimuovi contatto" se avete tempo provate ad aggiungere altre funzionalità.


//  let object = {
//      "marca": "Iphone",
//      "modello": "29 Pro Max",
//      "colore e materiale": "acciaio poco in e molto ossidabile",
//      "prezzo": "62.000€ trattabili", 
//      "disponibilità": "true", 
//      "contacts": ["Fabrizio","Elon Musk","Luciana"],
//      "call": function (){
//          console.log("Sto chiamando...")
//      },
//  "mostraconstacts": function(){
//      this.contacts.sort().forEach( contact => console.log(contact) )
//  },
//  }
//  console.log(object)
//  object.mostraconstacts()



    //    ---rimozione dall'elenco---


    let cell = {
        "marca": "Samsung",
        "modello": "S24",
        "prezzo": "1000", 
        "disponibilità": "true", 
        "contacts": ["Fabrizio","Antonio","Elon Musk"],
        "call": function (){
            console.log("Sto chiamando...")
        },
    "mostraconstacts": function(){
        this.contacts.sort().forEach( contact => console.log(contact) )
    },
    "rimuovicontact": function(...nome){
    
    this.contacts.splice(...nome)
    }
    }
    cell.rimuovicontact("Elon Musk")
    
    cell.mostraconstacts()