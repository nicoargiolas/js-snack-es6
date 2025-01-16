// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creazione array squadre
const teams = [
    { 'nome': "Juventus", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Inter", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Milan", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Napoli", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Roma", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Lazio", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Fiorentina", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Atalanta", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Torino", 'puntiFatti': 0, 'falliSubiti': 0 },
    { 'nome': "Sampdoria", 'puntiFatti': 0, 'falliSubiti': 0 }
];

// Creazione funzione per generare numeri casuali con un massimo
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

// Ciclo per assegnare i numeri casuali alle chiavi puntiFatti e falliSubiti
let counter = teams.length;
for (let i = 0; i < counter; i++) {
    teams[i].puntiFatti = getRandomInt(60);
    teams[i].falliSubiti = getRandomInt(200);
}
console.table(teams);

// Inizializzazione array vuoto per il risultato
const teams2 =[];
// Ciclo per assegnare al nuovo array oggetti che abbiano solo le chiavi nome e falliSubiti usando i valori del primo array
for (let i = 0; i < counter; i++) {
    teams2.push({'nome': teams[i].nome, 'falliSubiti': teams[i].falliSubiti})
}
console.table(teams2);