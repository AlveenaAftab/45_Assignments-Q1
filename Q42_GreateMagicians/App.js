// 42. Great Magicians: 
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
var magicians1 = ["Boothnath", "Bilbatori", "hatoba"];
function goodMagicians(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = magicians1[i] + " the best";
    }
}
function showMagicians(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
goodMagicians(magicians1);
showMagicians(magicians1);
