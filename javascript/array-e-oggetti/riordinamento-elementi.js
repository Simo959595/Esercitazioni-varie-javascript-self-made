// Dati i seguenti array mischiati e confusi:
let array_1 =[
 ['un', 'per', 'incatenarli.'],
 ['Anello', 'trovarli,'],
 ['ghermirli', 'e'],
 ['gondor', 'mark'],
];
let array_2 = [
 [['trovarli,']],
 ['tu,', 'sciocchi'],
 ['tu,', 'sciocchi', ['padron', 'Sauron']],
 ['nel', ['fuggite', 'gandalf']],
 [['domarli,', 'passare'], 'buio']
];
Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“ HINT
Non tutte le parole sono necessarie per la frase;
Occhio agli array annidati
ESECUZIONE
let frase1 = [["Un", "per", "incatenarli"],["anello", "trovarli"],["grermirli", "e"],["gondor", "mark"]];
let frase2 = [[["trovarli"]], ["tu", "sciocchi"], ["tu", "sciocchi", ["padron", "sauron"]], ["nel", ["fuggite", "gandalf"]], [["domarli", "passare"], "buio"]];
console.log(frase1[0][0],frase1[1][0],frase1[0][1],frase2[4][0][0], ",",frase1[0][0],frase1[1][0],frase1[0][1], frase1[1][1], ",",frase1[0][0],frase1[1][0],frase1[0][1], frase1[2][0], frase1[2][1], frase2[3][0],frase2[4][1],frase1[0][2])
