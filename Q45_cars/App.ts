// 45. Cars: 
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly.
import{ features } from "process"

function storeCarInfo(manufacture:string, modelName:string, ...extraoption:{[key:string]: any} []):
object{
    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraoption)
    }

    return carInfo;
}
let answer = storeCarInfo('honda', 'civic', {color:'black'}, {features:['navigation', 'power window']})
console.log(answer);