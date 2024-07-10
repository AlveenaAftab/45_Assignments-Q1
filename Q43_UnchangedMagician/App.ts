// 43. Unchanged Magicians: 
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.
let magicians2: string[] = ["Boothnath" , "Bilbatori" , "ram"]

function  goodMagician(magicians2:string[]){
    for(let i=0; i<magicians2.length; i++){
        magicians2[i] = magicians2[i] +  " the best"
        }
}

function copyArray(arr:string[]){
    return[...arr]
}


function showMagician(magician:string[]){
    magician.forEach(element =>{
        console.log(element);
        
    })
}

const copyMagicianArray = copyArray(magicians2)
goodMagician(copyMagicianArray);

console.log("this is my original array");
showMagician(magicians2);

console.log("this is my modified array");
showMagician(copyMagicianArray);