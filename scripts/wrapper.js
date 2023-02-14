console.log("Wrapper");

let x = 4560000; // x is a variable but so is a wrapper object (when define the variable it's compile to wrapper object )
console.log("x: " + x.toExponential()); //x: 4.56e+6


let n1 = 23.4567893;
console.log("n1: " + n1.toFixed(3)); //n1: 23.457
let n2 = 23.45;
console.log("n2: " + n2.toFixed(3)); //n2: 23.450


let n3 = 23.4567893;
console.log("n3: " + n3.toPrecision(4)); //n3: 23.46
let n4 = 23567;
console.log("n4: " + n4.toPrecision(3)); //n4: 2.36e+4
let n5 = 2456;
console.log("n5: " + n5.toPrecision(6)); //n5: 2456.00


















