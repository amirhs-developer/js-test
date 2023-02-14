//? String Definition
//? character Escaping => "\\"
//? Template Literal => ``

let message = 'node.js runtime error';
console.log(message);

let username = 'amirjs877';
let email = 'amir.dev@gmail.com';
console.log(`my name is Amir and username is :  ${username} and email is : ${email}`);


//? String Methods and Properties

//? Length Property 
let str = "ok!"
console.log(str.length);

//? toUpperCase and toLowerCase method 
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.charAt(0)); //return o
console.log(str[2]); //return ! 


str = "hello Amir Welcome to Javascript World"; 
let str1 = "Django is the Backend framework", str2 = "React is a Front end Library";
//? indexOf() 
console.log(str.indexOf('j')); //-1
console.log(str.indexOf('Amir')); //6
console.log(str.indexOf('u')); // return -1
console.log(str.indexOf('o',5)); //15

//? lastIndexOf()
console.log(str.lastIndexOf('to')); //19
console.log(str.lastIndexOf('World',5)); //-1

//? includes()
console.log(str.includes('Amir')) //true 
console.log(str.includes('ok')); //false 

//? startWith()
console.log(str.startsWith('hello')); //true
console.log(str.startsWith('ok')); //false 

//? endWith()
console.log(str.endsWith('World')); //true
console.log(str.endsWith('ok')); //false

//? subString()
console.log(str.substring(6));
console.log(str.substring(6,15));

//? repeat()
console.log(str1.repeat(2));
console.log(str1.substring(3).repeat(2));

//? concat() or join with + operator
console.log(str1.concat(str2));
console.log(str1.concat(' ','Done'));
console.log(str1 + ' ' + "Done");










































