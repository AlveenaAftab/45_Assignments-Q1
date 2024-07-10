// 42. Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
let magicians1: string[] = ["Boothnath" , "Bilbatori" , "hatoba"]

function  goodMagicians(magicians1:string[]){
    for(let i=0; i<magicians1.length; i++){
        magicians1[i] = magicians1[i] +  " the great"
        }
}


function showMagicians(magician:string[]){
    magician.forEach(element =>{
        console.log(element);
        
    })
}
goodMagicians(magicians1);
showMagicians(magicians1);