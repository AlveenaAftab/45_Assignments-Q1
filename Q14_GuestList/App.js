"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//14. Guest List: 
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
//includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
//each person, inviting them to dinner.
//define an array of list
let guestlist = ["alveena", "jaweria", "farooq"];
//invite each guest for dinner
//for each
//guestlist.forEach(guest => {
//  console.log(`Dear,${guest}! you are invited to dinner.`)
//});
//map()
//invite guest
let invitation = guestlist.map(guest => `Dear ${guest}, you are invited to dinner`);
//console.log(invitation);
invitation.forEach(invitation => {
    console.log(invitation);
});
