// 35. Animals: 
// Think of at least three different animals that have a common characteristic. Store the names 
// of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print 
// a sentence such as Any of these animals would make a great pet!
let animalPet : string[] = ['cat ', 'dog ', 'goat ']

console.log("Pet Animals");

for(let i=0; i<animalPet.length; i++){
   console.log(`${animalPet[i]}`);  
}
for (let i=0; i<animalPet.length; i++){
   console.log(`\n A ${animalPet[i].toLowerCase()} would make a great pet`); 
}
console.log("\n Any of these animals would make a pet \n ");