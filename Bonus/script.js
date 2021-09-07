let myStudentsArray = [
    {
        'name': "Akira",
        'surname': "Laine",
        'age': 25,
        'clever': 'もちろんですよ！',
        'likes': ["Anime", "Japan", "ビール"]
    },
    {
        'name': "Harry",
        'surname': "Potter",
        'age': 119,
        'clever': 'Good question!',
        'likes': ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        'name': "Sherlock",
        'surname': "Holmes",
        'age': 56,
        'clever': '...',
        'likes': ["Intriguing Cases", "Violin"]
    },
    {
        'name': "Kristian",
        'surname': "Vos",
        'age': 35,
        'clever': "No",
        'likes': ["Pizza", "Pasta", "Mandolino"]
    },
    {
        'name': "Marty",
        'surname': "McFly",
        'age': "Immortal",
        'clever': 'Of course',
        'likes': ["Programming", "Gaming", "Foxes"]
    }
]


let chosenName = prompt("Name of the profile you would you like to look up?");
let chosenSurname = prompt("Choose a property between 'surname', 'age', 'clever' or 'likes'");

console.log(lookUpProfile(chosenName,chosenSurname))


// FUNCTIONS
function lookUpProfile(name,property) {
    for (let i=0; i < myStudentsArray.length; i++) {
        if (myStudentsArray[i].name === name) {
            return myStudentsArray[i][property]|| "The property does not exist."
    } 
  } return "We couldn't find you, sorry!" 
}