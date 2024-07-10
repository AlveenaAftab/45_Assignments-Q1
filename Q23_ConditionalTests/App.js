"use strict";
/**23. Conditional Tests:
Write a series of conditional tests. Print a statement describing each test and your prediction
for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
//10 test
Object.defineProperty(exports, "__esModule", { value: true });
//test 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
//test 3
console.log("Is car == 'wow'? I predict False.");
console.log(car == 'wow');
//test 4
console.log("Is car == 'good'? I predict False.");
console.log(car == 'good');
//test 5
console.log("Is car == 'amazing'? I predict False.");
console.log(car == 'amazing');
//test 6
console.log("Is carlength > 0? I predict True.");
console.log(car.length > 0);
//test 7
console.log("Is car.toUpperCase() === 'BOMBAY'? I predict True.");
console.log(car.toUpperCase() === 'BOMBAY');
//test 8
console.log("Is car.toLowerCase() === 'bombay'? I predict True.");
console.log(car.toLowerCase() === 'bombay');
//test 9
console.log("Is car.include('u')? I predict True");
console.log(car.includes('u'));
