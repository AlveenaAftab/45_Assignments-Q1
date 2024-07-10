// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.
var magicians = ["Boothnath", "bilbatori", "hatoba"];
function magiciansName(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
magiciansName(magicians);
