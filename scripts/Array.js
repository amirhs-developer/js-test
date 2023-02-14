//? Array is Object and reference type

//? Create Array 
let arr1 = new Array("a","b","c");
console.log(arr1);
let arr2 = ["php","node","django"];
console.log(arr2);
let arr3 = [1,2,4,[5,6,7],true,'ok',8];

//? Access to element of array 
console.log(arr1[0]); //a 
console.log(arr2[1]); //node 
console.log(arr2[3]); //undefined 
console.log(arr3[0]); //1
console.log(arr3[3][0]); //5
console.log(arr3[4]); //true

//? Change value of element array 
arr1[0] = "b";
arr2[1] = "flask";

//? Length Property of array
console.log(arr1.length);
arr1.length = 10; //arr1 length upgrade to 10 
arr1.length = 2; //number <= arr.length => delete many element of array 
console.log(arr1);

//? delete element of array with delete 
delete arr2[1];
console.log(arr2);
console.log(arr2.length);

let languages = ["cpp","golang","solidity","php","nodejs"];

//? pop() => last el deleted 
let p = languages.pop();
console.log(p);
console.log(languages);

//? shift() => first el deleted 
let shift = languages.shift();
console.log(shift);
console.log(languages);

//? push() => added to last 
let push = languages.push("java");
console.log(push);
console.log(languages);

//? unshift() => added to first
let unshift = languages.unshift("js");
console.log(unshift);
console.log(languages);

//? concat for join arrays
let new_array = arr2.concat(["node","express",true]); 
console.log(new_array);

//? delete n element of array 
const l = new_array.length;
new_array.length = l - 2;
console.log(new_array);

//? concat array
let array1 = [1,2,3,5];
let array2 = [true,'o','k','php'];
let array3 = [array1,array2];
console.log(array3);

//? concat array with spret (es6)
let concatArray = [...array1,...array2];
console.log(concatArray);

//? join()
console.log(concatArray.join());
console.log(concatArray.join(')'));

//? slice()
let slice = languages.slice(0,4); // 0 and 4 - 1 
console.log(slice);
console.log(languages);

//? splice()
let splice = languages.splice(0,2);
console.log(splice);
console.log(languages);

let splice2 = languages.splice(0,2,"x","y");
console.log(splice2);
console.log(languages)

//? reverse()
let reverse = languages.reverse();
console.log(reverse);
console.log(languages);

//? sort()
let sort = languages.sort();
console.log(sort);
console.log(languages);

console.log([1,5,4,3,2,9,11,7].sort());

//? indexof 
console.log(languages.indexOf('java')); //index of element

//? includes
console.log(languages.includes('x')); //true or false 


