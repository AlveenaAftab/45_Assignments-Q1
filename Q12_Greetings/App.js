"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//12. Greetings: 
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be 
//personalized with the person’s name.
//loop
let names = ["Sabilla", "Tanzeela", "Aatera Riaz", "Aliza faheem", "Ayesha", "Fatima"];
for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]}! where are you now a days?`);
}
;
//for each
names.forEach(name => {
    console.log(`hey, ${name}!how are you?`);
});
//for loop
for (let name of names) {
    console.log(`hy, ${names}! how you have been?`);
}
;
