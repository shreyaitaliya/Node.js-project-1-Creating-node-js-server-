const moduls = require('./local');

let sum = moduls.sum(10, 50)
let min = moduls.min(40, 15);
let max = moduls.max(25, 16);
let div = moduls.div(50, 5);

console.log(`Ans :- ${sum}`);
console.log(`Ans :- ${min}`);
console.log(`Ans :- ${max}`);
console.log(`Ans :- ${div}`);