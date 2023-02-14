//? Conversion between Number and Strings 
//*
console.log('3' * 5); //15
console.log('10.3' * 1); //10.3
console.log('0xff' * 1);//255

//*
console.log(5 + '2'); //52

//*
console.log(' ' * 10); //0

//*
console.log('22dvxsdas' * 5); //NaN
console.log('js' * 5); //NaN


//? Convert to Number with Number() Method 
let n1 = '5000';
let n2 = Number(n1);
let msg = "Node js for backend development";
console.log(typeof n1); //string 
console.log(typeof n2); //number 
console.log(Number(msg)); //NaN
console.log(Number(n1) + 5);


//? Convert to String with String() Method and toString()
console.log(String(n2));
console.log(22..toString());
console.log(n2.toString() + 3);
console.log(NaN.toString());
console.log(22..toString(2));
console.log(22..toString(4));
console.log(22..toString(16));
console.log(22..toString(36))


//? parseInt() and parseFloat() Method
console.log(parseInt('4567ios')); //4567
console.log(parseInt('')); //NaN
console.log(parseInt('15',2));
console.log(parseInt('abcs45',16));
console.log(parseInt('456',32));

console.log(parseFloat('3456xcy'));
console.log(parseFloat('0xFF')); //0
console.log(parseFloat('0b11100')); //0
console.log(parseFloat('22.5')); //22.5
console.log(parseFloat('456.34.4')); //456.34
console.log(parseFloat('004567.45')); //4567.45
console.log(parseFloat('3.54e4')); //35400


//? undefined and null and boolean Conversion 
console.log(parseInt(undefined)); //NaN
console.log(Number(undefined)); //NaN
console.log(String(undefined)); //undefined 
console.log(3 * undefined); //NaN
console.log(undefined + 3); //NaN
console.log(undefined + '3'); //undefined3
console.log(String(undefined) + '3'); ///undefined3
console.log(String(undefined) + 3); ///undefined3

console.log(parseInt(null)); //NaN
console.log(Number(null)); //0
console.log(null + 20); // 0 + 20 = 20
console.log(null + 'ok'); // null + ok = nullok
console.log(true + '20'); //true20 
console.log(false + 'ok'); //falseok
console.log(true + 4); //5 
console.log(false + 4); //4

console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

console.log(Boolean('0')); //true
console.log(Boolean(' ')); //true
console.log(Boolean('node.js')); //true 
console.log(Boolean('124556')); //true
console.log(Boolean(123)); //true

















