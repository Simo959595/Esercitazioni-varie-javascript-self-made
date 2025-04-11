// TIRO DEL DADO DI DUE GICATORI (IN QUESTO CASO 3 TIRI A TESTA)


let tiri_gioc_1 = 3

let punti_gioc_1 = 0

for(let i = 0; i < tiri_gioc_1; i++)

punti_gioc_1 = punti_gioc_1 + Math.floor(Math.random()* (6 - 1 + 1) + 1)

console.log("Il giocatore 1 ha totalizzato" + " " + punti_gioc_1 + " " + "punti")

let tiri_gioc_2 = 3

let punti_gioc_2 = 0

for(let i = 0; i < tiri_gioc_2; i++)

    punti_gioc_2 = punti_gioc_2 + Math.floor(Math.random()* (6 - 1 + 1) + 1)

    console.log("Il giocatore 2 ha totalizzato" + " " + punti_gioc_2 + " " + "punti")
