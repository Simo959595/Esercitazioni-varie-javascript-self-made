// ESERCIZIO5

let cats_tot = Number (prompt("numero totale dei gatti:"))
let cats_line = Number (prompt("numero dei gatti in fila:"))

let line = cats_tot / cats_line
console.log(Math.round(line))

let resto = cats_tot % cats_line
console.log(resto)

let mancanti = cats_line - resto
console.log(mancanti)

console.log(`Ci sono ${cats_line} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${resto}`)

