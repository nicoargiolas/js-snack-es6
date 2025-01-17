// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function numbersBetween(a,b,array) {
    // Creo un array vuoto per la variabile risultato
    const newArray = [];
    if (a < b) {
        // Ciclo che parte da a+1 e finisce a b-1 in modo da prendere le posizioni comprese tra i due numeri
        for(let i = (a + 1); i < b; i++){
            newArray.push(array[i]);
        };
    } else {
        return alert("Il primo numero deve essere inferiore al secondo");
    }
    return newArray;
}

a = parseInt(prompt("Inserisci un numero"));
b = parseInt(prompt("Inserisci un altro numero (deve essere più piccolo del primo)"));
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.table(numbersBetween(a,b,array));
// Non avevo capito la consegna