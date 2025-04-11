// GRUPPO PRINCIPALE
const giocodelbowling = {
    // ELEMENTO 1
    "giocatoritotali": [
        { "name": "Michelangelo", "tiri": [] },
        { "name": "Donatello", "tiri": [] },
        { "name": "Raffaello", "tiri": [] },
    ],
 
    // ELEMENTO 2
    "punteggio": function(){
        for (let i = 0; i < 10; i++) {           
            this.giocatoritotali.forEach(( giocatore ) =>{
                giocatore.tiri.push( Math.floor(Math.random()* (10 - 1 + 1) + 1))
            } )
        }
    },

    // ELEMENTO 3
    "punteggiofinale": function(){
        this.giocatoritotali.forEach(( giocatore ) =>{
            giocatore.punteggiofinale = giocatore.tiri.reduce((acc, tiro) => acc + tiro, 0)
          } )   
    },
    // AGGIUNTA GIOCATORE 4
    "giocatoreaggiunto": function(nome){
        this.giocatoritotali.push( { "name": nome, "tiri": [] })
    },

    // VINCITORE 1 (TEMPORANEO), (AI FINI DEL CALCOLO)
    "trovavincitore1": function(){
        let vincitore = this.giocatoritotali[0]
        this.giocatoritotali.forEach( (giocatore) =>{
             if(vincitore.punteggiofinale < giocatore.punteggiofinale){
                 vincitore = giocatore
            }
        } )
        console.log("il vincitore finale è" + " " + vincitore.name + " " + "con un punteggio totale di" + " " + vincitore.punteggiofinale + " " + "punti")
    },

    // VINCITORE 2 (TEMPORANEO), (AI FINI DEL CALCOLO)
    "trovavincitore2": function(){
        this.giocatoritotali.sort( (a , b) => a.punteggiofinale - b.punteggiofinale )
        
6
    }
}

// AGGIUNTA GIOCATORE 4 (CONTINUO)
giocodelbowling.giocatoreaggiunto("Leonardo")

// STAMPE RISULTATI
// SINGOLI PUNTEGGI GIOCATORI 
giocodelbowling.punteggio()
// PUNTEGGI TOTALI GIOCATORI
giocodelbowling.punteggiofinale()
// VINCITORE 1 (TEMPORANEO), (AI FINI DEL CALCOLO)
giocodelbowling.trovavincitore1()
giocodelbowling.trovavincitore2()
console.log(giocodelbowling.giocatoritotali.sort((a, b) => b + a))

