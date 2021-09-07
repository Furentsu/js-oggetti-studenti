// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


let myStudent = {
    'nome': undefined,
    'cognome': undefined,
    'eta': undefined,
} 

for (let key in myStudent) {
    console.log(myStudent[key]);
}

let myStudentsArray = [
    {
        'name': "Akira",
        'surname': "Laine",
        'age': 25,
    },
    {
        'name': "Harry",
        'surname': "Potter",
        'age': 119,
    },
    {
        'name': "Sherlock",
        'surname': "Holmes",
        'age': 56,
    },
    {
        'name': "Kristian",
        'surname': "Vos",
        'age': 35,
    },
    {
        'name': "Marty",
        'surname': "McFly",
        'age': "Immortal",
    }

]

for (let i=0; i < myStudentsArray.length; i++) {
    console.log(myStudentsArray[i].name + ' ' + myStudentsArray[i].surname);
}