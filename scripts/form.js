//? Forms in javascript

console.log('form');

let form_1 = document.forms[0];
form_1 = document.getElementsByTagName('form')[0];
// form_1 = document.forms.search;

console.log(form_1);
console.log(form_1.userName); // return input with name='userName'
console.log(form_1.colorTheme); //return input with name='colorTheme' 


console.log(form_1.action); //return action form
console.log(form_1.method); // return method form => get or post 
console.log(form_1.length); // return number child of form 


let textInput = form_1.userName;
let colorTheme = form_1.colorTheme;

colorTheme.style.visibility = 'hidden';

textInput.required = true;
textInput.readOnly = false;
textInput.disabled = false;

//? focus by click input
let input = document.getElementById('username');
input.addEventListener('focus',focusInput);
function focusInput(event){
    event.target.select();
}

//? blur in js for validation 
let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');

setInterval(() => {
    dayInput.addEventListener('blur',(event) => {
        if(!(dayInput.value >= 1 && dayInput.value <= 31)){
            dayInput.nextElementSibling.innerHTML = 'number between 1 to 31';
        } else dayInput.nextElementSibling.innerHTML = ' ';
    })
    dayInput.addEventListener('focus',(event) => event.target.select())
    
    monthInput.addEventListener('blur',(event) => {
        if(!(monthInput.value >= 1 && monthInput.value <= 12)) {
            monthInput.nextElementSibling.innerHTML = 'number between 1 to 12';
        } else monthInput.nextElementSibling.innerHTML = ' ';

    
    })
},1000)

monthInput.addEventListener('focus',(event) => event.target.select())
dayInput.focus();


//? change event 
let text = document.getElementById('text');
let textarea = document.getElementById('textarea');
let checkbox = document.getElementById('checkbox');
let select = document.getElementById('select');

text.addEventListener('change',handle);
textarea.addEventListener('change',handle);
checkbox.addEventListener('change',handle);
select.addEventListener('change',handle);

function handle(event){
    event.target.nextElementSibling.innerHTML+=`change` + ' ';
}



// form_1.addEventListener('submit',x);
// form_1.addEventListener('reset',y);
// form_1.reset()
// form_1.submit();










