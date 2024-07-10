//20. Think of something you could store in an array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.

let languages:string[] = ["English","urdu","phusto","punjabi","sindhi"];

//print list of countries

console.log("list of languages:",languages.forEach(country =>{
    console.log(country)
}));
