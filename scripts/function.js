//? ( function definition )

//? function declaration 

function showInformation(){
    console.log('amirhossein');
    console.log('hosseinzadeh');
}
showInformation();



//? function expression 

const showInformation2 = function(){
    console.log('amirhossein');
    console.log('hosseinzadeh');
}
showInformation2();
let newInformation3 = showInformation2;
newInformation3();



//? input and output in function 
//? parameters and arguments in function 

function showUsers(users){ //users as parameter
    if(users[0] == 1000) return 
    console.log(users[0]);
}
let arr = [1,3,5];
showUsers(arr); // arr as argument 


//? arguments in js (for n argument ) => 
function showLength(){
    console.log(arguments.length);
    if(arguments[0] !== undefined)
    console.log(arguments[0]);
}
showLength(1,2,3); //3 
showLength(); //0 


//? rest operator 
function x(...numbers){
    let sum=0;
    let avg=0;
    for(let n of numbers)
        sum+=n;
    avg = sum / numbers.length;
    return avg;    
}
let result = x(1,4,5,6,23,4);
console.log(result);



//? Arrow function in es6 

const arrow = () => {

}

const arrowF = x => x * x;




//? forEach and filter method 

let colors = ['red','green','blue','yellow'];
colors.forEach((el,index) => {
    console.log(el,index);
})

let numbers = [1,4,5,6,7,6,12,'ok',true];
let results = numbers.filter((el) => el % 2 === 0); //return new array
console.log(results);
























