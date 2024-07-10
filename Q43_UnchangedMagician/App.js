var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 43. Unchanged Magicians: 
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.
var magicians2 = ["Boothnath", "Bilbatori", "ram"];
function goodMagician(magicians2) {
    for (var i = 0; i < magicians2.length; i++) {
        magicians2[i] = magicians2[i] + " the best";
    }
}
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function showMagician(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magicians2);
goodMagician(copyMagicianArray);
console.log("this is my original array");
showMagician(magicians2);
console.log("this is my modified array");
showMagician(copyMagicianArray);
