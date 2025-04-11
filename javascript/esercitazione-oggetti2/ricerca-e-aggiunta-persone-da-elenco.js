// esercizio 1 AGGIUNGE UNA VOCE CHE MOSTRA LE PERSONE CHE PROVENGONO DAL CONTINENTE CHE INSERICE L'UTENTE

// let inizio = {
//     "liste": [
//         {"firstName":"Marco","lastName":"M","country":"Switzerland","continent":"Europe","age":"19","language":"javascript"},
//         {"firstName":"Simone","lastName":"S","country":"Tahiti","continent":"Oceania","age":"28","language":"javascript"},
//         {"firstName":"Matteo","lastName":"L","country":"Taiwan","continent":"Asia","age":"35","language":"HTML"},
//         {"firstName":"Ettore","lastName":"M","country":"Tajikistan","continent":"Asia","age":"30","language":"CSS"},
//     ],
    


                                       
//     "cercamodello": function(zona){
//         inizio.liste.forEach( (lista)=>{
//             if(lista.continent.toLowerCase() == zona.toLowerCase()){
//                 console.log(lista)
//                }
//         } )
//     }
// }
// let ricerca = prompt("immetti continente")
// inizio.cercamodello( ricerca )



// esercizio 2 aggiunta di una voce per ogni persona che dice Awee regà, mi chiamo NOMEPERSONA e lavoro con NOMEPROGRAMMA, ma effettivamente è meglio javascript`

// let lista = [
//     {firstName: `Sofia` , lastName: `I` , country: `Argentina` , continent: `Americas` , age: `35` , language: `Java` },
//     {firstName: `Lukas` , lastName: `X` , country: `Croatia` , continent: `Europe` , age: `35` , language: `Python` },
//     {firstName: `Madison` , lastName: `U` , country: `United States` , continent: `Americas` , age: `32` , language: `Ruby` }
// ];
// let addGreeting = (array) => {
//     let newArray = array.map(arr => {
//         let obj = {...arr}
//         console.log(obj);
//         obj.Greeting = `Awee regà, mi chiamo ${obj.firstName} e lavoro con ${obj.language}, ma effettivamente è meglio javascript`
//         return obj
//     })
//     return newArray
   
// }
// console.log(addGreeting(lista));
// console.log("sotto originale");
// console.log(lista);





// esercizio 3
// es.1
//let inizio = {
//"persone" : [
//    {"firstName": "Sofia" , "lastName": "I" , "occhi": "vedi" },
//    {"firstName": "Michele" , "lastName": "L" , "occhi": "neri" },
//    {"firstName": "Giorgio" , "lastName": "F" , "occhi": "azzurri" }
//            ],
//    "coloreocchi": function(ricerca){
//        inizio.persone.forEach( (persona)=>{
//            if(persona.occhi == ricerca){
//                console.log(persona)
//            }
//            }                 )
//                                    }
//            }
//let ricerca = "verdi"

//inizio.coloreocchi(ricerca)


// es.2
let inizio = [
      {"firstName": "Sofia" , "lastName": "I" , "occhi": "vedi" },
      {"firstName": "Michele" , "lastName": "L" , "occhi": "neri" },
      {"firstName": "Giorgio" , "lastName": "F" , "occhi": "azzurri" }
              ];

function trovaocchi(Array, color){
  let filtrato = Array.filter((persona)=>persona.eyes == color)
  return filtrato.lenght > 0 ? true : false
}
let result = trovaocchi(inizio,"Green")
console.log(result);










// Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:

// se logged=true: mostrare il messaggio “L’utente è stato registrato.”
// se logged=false: mostrare il messaggio “L’utente non è registrato.”


   // let list = [
     //   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
       // { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
       // { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true },
   // ];

     // function checkUsers(users) {
       // users.forEach(user => {
         // if (user.logged) {
           // alert(`L'utente ${user.firstName} ${user.lastName} è stato registrato.`);
         // } else {
           // alert(`L'utente ${user.firstName} ${user.lastName} non è registrato.`);
         // }
       // });
     // }
     // checkUsers(list);
      