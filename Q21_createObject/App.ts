//21. They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.

//in object what we learned
//default typed object
//add new property
//define custom type property
//use any object

//name,rollnumber,grade
//let objectname = {
    //key1 =`value1`,
    //key2 =`value2`,
    //key3 =`value3`}
    //console.log(objectname.key1);
//}
//let student = {
  //  name: "Alveena",
    //rollnumber: 2,
    //grade:[90,85,75]
//}
//console.log(student.grade[1]);

//let products={
  //  name: "Computer",
    //price: 600,
    //description:"best modal Ever",
//}
//console.log(products.price);

//type inteface help in custom data type interface Product {name:string; price:number; dercription:string; } 

//let person1 = {
  //  name: "Alveena",
    //age: 21,
    //address: "Karachi",
    //hobbies: ["reading","singing"]
//}

//let person2 = {
  //  name: "Tanzeela",
    //age: 20,
    //address: "Karachi",
    //hobbies: ["dancing","fighting"]
//}

//console.log(person1.hobbies);

//type annotation

//let myVariable:string ="hye";

//type infers
//let anotherVariable = `life`;

//initial object
//let person = {
  //  name: "Alia",
    //age: 40,
    //address: "Karachi"
//}

//updated property

//person.age = 50;
//person.address = "London";

//add new property
//person["gender"] = "male";

//console.log(person);

//define custom type property

//any property 
//let myVariable: any;

//myVariable = "hellow";
//myVariable = "true";

let objectContainingItems :{[key: string]: any} = {
    "computer": {
        name: "Computer",
        price: 600,
        description:"best modal Ever",
    },

    "mobile": {
        name: "Mobile",
        price: 500,
        description:"best modal Ever",
    },
};
console.log(objectContainingItems);












