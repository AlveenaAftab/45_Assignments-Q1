// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.
let magicians: string[] = ["Boothnath" , "bilbatori" , "hatoba"]
function magiciansName(magicians : string[]){
    magicians.forEach(magician =>{
console.log(magician);

    })
}
magiciansName(magicians)