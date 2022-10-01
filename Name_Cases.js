
// Saturday, 1 October 2022
// print name in all cases
let message = "Hello Eric, would you like to learn some Python today?";
console.log("Upper Case",message.toUpperCase());
console.log("Lower Case",message.toLowerCase());
console.log("Title Case",message.split(' ')
.map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
.join(' '));

