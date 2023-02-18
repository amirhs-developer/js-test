//? strict mode 
"use strict"

//? try-catch block 
try{
    //codes
}catch(err){
    //handle errors
    console.log(err.message)
    console.log(err.name)
}finally{
    // run 
}

//? throw 
const StringValue = (str) => {
    if(typeof str != 'string') {
        throw new TypeError('input type is wrong');
    }
    console.log(`${str} <br/> input type is correct`);
}
StringValue('javascript language');



//? functions properties and methods 
//? length
//? call
//? apply

const test = (x,y) => {
    return x + y;
}
console.log(test.length);


const user = () => {
   return `hi ${this.name}`
}
let user1 = {name: 'amirhossein'}
let user2 = {name: 'mohammadreza'}
console.log(user.call(user1))