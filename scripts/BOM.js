//? Global object and BOM ( Browser object model )

window.parseFloat()
window.parseInt()
window.console.log()
console.log(window.Infinity);

function globalWindow(){
    runzero = 10; //global 
    window.f = () => { //global
        console.log('f');
    }
}
globalWindow();
console.log(runzero);
console.log(window.runzero);
f();
window.f();

//? system dialogs 
let alertDialogButton = document.getElementById('alert');
let confirmDialogButton = document.getElementById('confirm');
let promptDialogButton = document.getElementById('prompt');
let printDialogButton = document.getElementById('print');

alertDialogButton.addEventListener('click', () => {
    alert('alert Dialog');
})

confirmDialogButton.addEventListener('click', () => {
    let answer = confirm('are you sure ? ');
    if(answer) alert('ok')
    else alert('what ! please again');
})

promptDialogButton.addEventListener('click',() => {
    let name = prompt('enter your name');
    let family = prompt('enter your family','none');
    let message = `your name is ${name} and your family is ${family}`
    alert(message);
})

printDialogButton.addEventListener('click',() => print())

document.addEventListener('beforeprint', () => {
    printDialogButton.style.display = 'none';
})

document.addEventListener('afterprint', () => {
    printDialogButton.style.display = 'none';
})

//? setTimeout and clearTimeOut
//? setInterval and clearInterval
let set = document.getElementById('set');
let clear = document.getElementById('clear');
let timer;
set.addEventListener('click', () => {
     timer = setInterval(()=>{
        alert('ok');
    },2000);
})

clear.addEventListener('click', () => {
    clearInterval(timer);
})

//? RequestAnimationFrame() and setInterval() for animation in js 

requestAnimationFrame(met);
const met = () => { 
    //codes 
    requestAnimationFrame(met);
}





















