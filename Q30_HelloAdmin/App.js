"use strict";
// 30. Hello Admin: 
// Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they log in to a website. Loop through the array, and 
// print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ['admin', 'Alveena', 'Ousaf', 'Abdul-Rasheed', 'Abdul-Hadi', 'Aftab'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') { //here i indicate position 
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again`);
    }
}
;
//so as we know if in ifelse statemetns if is true compiler will directly see if statement and console it but here we have
//written i is less usernames.length which is 5 so after if satement has been print when it comes again to if statement 
//now as in if it is wriiten if usernaem is admin but in 2nd position this time it is written Alveena so it will execute
//else statement witn 2nd name similarly for 3,4,5.
