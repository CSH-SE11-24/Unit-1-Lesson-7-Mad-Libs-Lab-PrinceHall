// Console log a welcome message with instructions to mad libs

console.log("Mad Libs is a phrasal template game which works with the player receiving a list of words and they come up with words that make up the parts of speech")

// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words

let Adjective = prompt("Give me a Adjective")

let pluralnoun = prompt("Give me a plural noun")

let verb = prompt("Give me a present tense verb")

let Adjective2 = prompt("Give me another Adjective")
// Create an array that stores the values the user entered

let array = []
array.push(Adjective)
array.push(pluralnoun)
array.push(verb)
array.push(Adjective2)

// Console log the story with the array values passed into the blanks

console.log(`in a small ${array[0]} school in the Bronx, there was a problem with too many ${array[1]}. These ${array[1]} loved to ${array[2]}, which caused Mr.P so many headaches. However, no one wanted to remove them because they were too ${array[3]} so they stayed there forever}`)
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive








