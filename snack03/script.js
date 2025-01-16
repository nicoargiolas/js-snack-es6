// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function numbersBetween(a,b,array) {
    // Assegno alla variabile n il valore di a per poi modificarla nel ciclo
    let n = a;
    if (a < b) {
        // Ciclo che si ripete tante volte quanta è la differenza tra a e b - 1
        for(let i = 0; i < (b - a - 1); i++){
            n += 1;
            array.push(n);
        };
    } else {
        return alert("Il primo numero deve essere inferiore al secondo");
    }
    return array;
}

a = parseInt(prompt("Inserisci un numero"));
b = parseInt(prompt("Inserisci un altro numero (deve essere più piccolo del primo)"));
array = [];

console.table(numbersBetween(a,b,array));