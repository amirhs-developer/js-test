//? Create Object 
let obj1 = new Object();
let obj2 = {}

//? Properties 
obj1.color = 'red';
obj1.language = 'fa';
obj2['phoneNumber'] = '+98905898970';
//? Methods
obj1.showInformation = function(){

}

//? object literal 
let person = {
    //? properties
    firstname: 'amirhossein',
    lastname: 'hosseinzadeh',
    age: '22',
    //? methods
    showInformation: function(){
        console.log(this.firstname + this.lastname + this.age);
    },
    showInformation2(){
        console.log('ok');
    },
    showInformation3 : () => {
        console.log('ok');
    }
}
console.log(person);
person.showInformation();
person.showInformation2();
person.showInformation3();
person['phoneNumber'] = '+989015898970';

//? for in 
for(let prop in person){
    if(typeof person !== 'function') console.log(`${prop}:` + person[prop]);
}

//? nested object 
const student = {
    name: 'amir',
    family: 'alexian',
    age: 23,
    showBiography(){
        console.log(`${this.name} + ' ' + ${this.family} + ${this.age}`);
    },
    account: {
        accountNumber: '#334565767',
        balance: 1200000,
        getBalanceString(){
            return 'your balance' + ' ' + this.balance;
        }
    },
    getFullname(){
        return `${this.name} + ' ' + ${this.family}`
    }
}
let balanceStudent = student.account.getBalanceString();
let accountNumberStudent = student.account.accountNumber;
console.log(balanceStudent + '\n' + 'your account number: ' + accountNumberStudent );

