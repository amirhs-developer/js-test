//? Object is Reference type
let object1 = {
    buildNumber: '12345',
    number: '20',
}
let object2 = {
    buildNumber: '67899',
    number: '19',
}
object1 = object2; //! same address in memory  
console.log(object1);
object1.buildNumber = '#ff1234';
console.log(object2.buildNumber);



//? Clone Object
//* one way
object1 = Object.assign({},object2);

//* tow way 
let a = {};
let b = {};
a = {...b};
let c = {
    ...a,
    ...b,
    x: 'ux'
}


//? factory function 
// let car1 = {
//     color: 'white',
//     speed: '300km',
//     move(){
//         console.log('move');
//     },
//     stop(){
//         console.log('stop')
//     }
// }
// let car2 = {...car1};

function CreateCar(color,speed){
     return {
        color: color,
        speed: speed,
        move(){
        console.log('move');
        },
        stop(){
        console.log('stop');
        }
    }
};
let car1 = CreateCar('green','400km');
console.log(car1);


//? constructor function and instanceof operator (typeof function is object)
function Person(firstname,lastname,age,degree){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.degree = degree;
    this.move = () => console.log('move');
    this.stop = () => console.log('stop');
}
let person1 = new Person('amirhossein','hosseinzadeh',23,'karshenasi');
console.log(person1);

//? instanceof operator  
console.log(typeof person1); //object
console.log(person1 instanceof Person); //true 
console.log(person1 instanceof Object); //true 
console.log(person1 instanceof Array); // false 

















