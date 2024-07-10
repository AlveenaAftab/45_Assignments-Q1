//13. Your Own Array: 
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
//that stores several examples. Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”

let TransportationMode: string[] =["honda bike","bus","car","bicycle"];
//for loop
for (let i = 0; i < TransportationMode.length; i++) {
    console.log(`I would like to own a ${TransportationMode[i]}`);
};

//forEach
//TransportationMode.forEach(mode =>{
  //  console.log(`I would like to own a ${mode}`);
//});

