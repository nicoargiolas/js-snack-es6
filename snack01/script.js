// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// Collegamento a elementi del DOM
const result = document.getElementById('result');

// Creazione array
const bikes = [
    {
        'nome' : 'Specialized Tarmac SL7',
        'peso' : 7,
    },
    {
        'nome' : 'Cannondale Trail 5',
        'peso' : 13,
    },
    {
        'nome' : 'Trek FX 3 Disc',
        'peso' : 11,
    },
    {
        'nome' : 'Bianchi Oltre XR4',
        'peso' : 6.5,
    },
    {
        'nome' : 'Scott Aspect 950',
        'peso' : 14,
    }
];

// Assegno variabile contatore
let counter = bikes.length;
// Assegno variabile risultato al primo elemento dell'array
let lighterBike = bikes[0];
// Creo ciclo per assegnare alla variabile risultato l'oggetto della bici più leggera
for (let i = 1; i < counter; i++) {
    if (bikes[i].peso < lighterBike.peso) {
        lighterBike = bikes[i];
    }
};

// Assegno all'elemento del DOM il testo da dare in output
result.innerText = `La bici più leggera è la ${lighterBike.nome} con un peso di ${lighterBike.peso}kg.`;
