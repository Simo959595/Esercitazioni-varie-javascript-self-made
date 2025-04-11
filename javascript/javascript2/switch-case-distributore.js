// DISTRIBUTORE DI BEVANDE
let scelta

do {
scelta = prompt("Inserire il numero della bevanda selezionata")
    switch (scelta) {
        case 1:
            console.log("Acqua")
            break;
        case 2:
            console.log("Coca-Cola")
            break;
        case 3:
            console.log("Birra")
            break;

        default:
            alert("scelta non valida")
            break;
    }

} while (scelta< 1 || scelta> 3)



