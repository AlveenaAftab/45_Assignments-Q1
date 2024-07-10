//18. Seeing the World: 
//Think of at least five places in the world you’d like to visit.
//• Store the locations in an array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
//changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
//order has changed

//alphabateical order a,b,c,d
//unorder b,g,r,e

let favoriteplacesToVisit:string[] =["Iraq","America","Turkey","Thialand","Oman"];

//print in original order
console.log("originaloreder:",favoriteplacesToVisit);

//• Print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical Order:",favoriteplacesToVisit.slice().sort());

//• Show that your array is still in its original order by printing it.
console.log("originalorder:",favoriteplacesToVisit);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:",favoriteplacesToVisit.slice().sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log("originaloreder:",favoriteplacesToVisit);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order changed");
favoriteplacesToVisit.reverse();
console.log(favoriteplacesToVisit);

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("originalorder",favoriteplacesToVisit.sort());
console.log(favoriteplacesToVisit);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
//changed.
console.log("reverse alphabetical order changed:",favoriteplacesToVisit.sort().reverse());

console.log(favoriteplacesToVisit);

