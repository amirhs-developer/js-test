//* Function , Object , Method , Property
//* Utility Method
//* Special Values


console.log(typeof number); //number
console.log(typeof string); //string
console.log(typeof 3.222);

let number = Number.isInteger(22); //true

console.log(2/0); //Infinity
console.log(-2/0); //-Infinity
console.log(2e888); //Infinity

console.log(number - 'nodejs'); //Nan
console.log(number * 2); //Nan


console.log(Number.isFinite(1/0));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(Nan));
console.log(Number.isFinite(42));
console.log(Number.isNaN(Nan));
console.log(Number.isNaN(44));
console.log(Number.isNan(Infinity));
console.log(Number.isNan(4 - 'PHP'));







