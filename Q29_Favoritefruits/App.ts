// 29. Favorite Fruit: 
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
// such as You really like bananas!

const favorite_fruits: string[] =['banana','apple','grapes'];

//here we haven;t use === we will use .inculdes function b/c we have to compare 

if (favorite_fruits.includes('banana')) {
    console.log("you really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("you really like apples!");
}
if (favorite_fruits.includes('grapes')) {
    console.log("you really like grapes!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("you don't really like strawberries!");
}
if (favorite_fruits.includes('mango')) {
    console.log("you don't really like mangoes!");
}