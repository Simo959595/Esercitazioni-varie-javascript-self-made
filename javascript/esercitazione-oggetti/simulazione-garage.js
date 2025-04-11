
// ESERCIZIO 1:
// Realizzare un oggetto che rappresenti un garage: 
// Dovrà contenere una lista di automobili. Ciascuna automobile dovrà avere una marca (es. Fiat) ed un modello (es. Panda).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

// AUTO DISPONIBILI
// let Fiat = ("Fiat")
// let BMW = ("BMW")
// let Mercedes = ("Mercedes")
// let Ferrari = ("Ferrari")
// INSERIMENTO RICHIESTA UTENTE
// let richiesta = prompt("Inserisci la marca per sapere se abbiamo qualcosa del genere in garages")
// GARAGE
let garage = {
    "cars": [
        { "marca": "Fiat", "modello": "Panda", "colore": "biancospino", "prezzo": "10.500 €","Anno":"2009"},
        { "marca": "Fiat", "modello": "Punto", "colore": "Grigio topo", "prezzo": "1.200 €","Anno":"2005"},
        { "marca": "Fiat", "modello": "Barchetta", "colore": "Rosso rubino", "prezzo": "5.500 €","Anno":"1990"},
        { "marca": "Fiat", "modello": "Marea", "colore": "Blu notte", "prezzo": "50 €","Anno":"IXX secolo"},
        { "marca": "BMW", "modello": "740", "colore": "nero opaco", "prezzo": "35.000 €","Anno":"2011"},
        { "marca": "Mercedes", "modello": "Classe C", "colore": "grigio metallizzato", "prezzo": "28.000 €","Anno":"2015"},
        { "marca": "Ferrari", "modello": "California", "colore": "giallo Modena", "prezzo": "179.900 €","Anno":"2008"},
        { "marca": "Ferrari", "modello": "Testarossa", "colore": "rosso Ferrari", "prezzo": "190.000 €","Anno":"2000"},
        { "marca": "Ferrari", "modello": "Berlinetta 12C", "colore": "Marrone terra di Siena", "prezzo": "220.000 €","Anno":"2018"},
        { "marca": "Ferrari", "modello": "La Ferrari", "colore": "Bianco ghiaccio", "prezzo": "349.900 €","Anno":"2022"},
    ],
    
// COLLEGAMENTO BANCA DATI AUTO RICHIESTA tipo 1

                                       
    "cercamodello": function(brand){
        garage.cars.forEach( (car)=>{
            if(car.marca.toLowerCase() == brand.toLowerCase()){
                console.log(car.modello)
                console.log(car.colore)
                console.log(car.prezzo)
                console.log(car.Anno)
            }
        } )
    }
}
let ricerca = prompt("inserisci modello")
garage.cercamodello( ricerca )


 //                                      tipo 2

    // if(richiesta == Fiat) {
    //     console.log(garage.tutteleauto[0],garage.tutteleauto[1],garage.tutteleauto[2],garage.tutteleauto[3])}
    // if(richiesta == BMW) {
    //     console.log(garage.tutteleauto[4])
    // }
    // if(richiesta == Mercedes) {
    //     console.log(garage.tutteleauto[5])
    // }
    // if(richiesta == Ferrari) {
    //     console.log(garage.tutteleauto[6],garage.tutteleauto[7],garage.tutteleauto[8],garage.tutteleauto[9],)
    // }





