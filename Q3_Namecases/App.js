"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//3. Name Cases: 
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase and titlecase.
let personName = "Alveena Aftab";
//lowercase
let LowerCaseName = personName.toLowerCase();
console.log(LowerCaseName);
//uppercase
let UpperCaseName = personName.toUpperCase();
console.log(UpperCaseName);
let personname = "i am learing typescript";
//titlecase
let words = personname.split(" ");
//step 02 //split()
let TitleCaseName = "";
//step 03 //loop 1-10
for (let i = 0; i < words.length; i++) {
    TitleCaseName += words[i].charAt(0).toUpperCase()
        + words[i].slice(1).toLowerCase() + " ";
}
console.log(TitleCaseName);
