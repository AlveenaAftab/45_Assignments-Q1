//16. More Guests: 
//You just found a bigger dinner table, so now more space is available. Think of three more guests 
//to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
//people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list

let guestlist:string[] = ["alveena","jaweria","farooq","faiqa"];

console.log("great news! we found a bigger table");

//unshift
guestlist.unshift("fahad");

//splice
guestlist.splice(Math.floor(guestlist.length/2),0,"Alveena");

//push
guestlist.push("cheetni");
console.log(guestlist);

//for(let i=0;i<guestlist.length;i++)
//{
  //  console.log(`Dear ${guestlist[i]}, please come to dinner`);
//}

//foreach

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to dinner`);
});