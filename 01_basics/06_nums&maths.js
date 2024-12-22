
//----------------------------------------------nums----------------------------------------------

let score = 400
let num = new Number(100)

console.log(score)
console.log(num);

console.log(num.toString().length)
console.log(num.toFixed(2))

num = 45.78
console.log(num.toPrecision(2))

num = 1000000
console.log(num.toLocaleString());



// -------------------------------------Maths--------------------------


console.log(Math.abs(-5))  // convert any neg or pos number to positive
console.log(Math.round(4.5)) // round off the value
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(4,8,5,26))
console.log(Math.max(4,88,4,6,67))

console.log(Math.random())
const min = 40;
const max = 50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
