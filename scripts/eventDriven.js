//? event-driven programming event listener and event handlers

const buttonHandler = () => {
    let paragraph = document.createElement('p');
    let bContainer = document.getElementById('b-container');
    paragraph.textContent = 'Button is Clicked ';
    paragraph.style.fontSize = '32px';
    paragraph.style.color = 'blue';
    setTimeout(()=>{
        bContainer.appendChild(paragraph);
    },3000)
}
let button = document.querySelector('#button-1');
let bContainer = document.querySelector('#b-container');
let main = document.querySelector('#main');


const btnHandler = () => {
    let bContainer = document.getElementById('b-container');
    bContainer.innerHTML+=`<p style='color:blue'>Button is Clicked</p>`;
}

button.addEventListener('click',buttonHandler);



// button.addEventListener('click',()=>{
//     console.log('Clicked Button');
// })

main.addEventListener('dblclick',dblClicked);
function dblClicked(event){
    //* event.type
    let h = `${event.type}`;
    //* event.target.nodeName
    h+=`${event.target.nodeName}`
    //* clientX and clientY offsetX offsetY pageX and pageY
    h+=`${event.offsetX}` + `${event.offsetY}` 
    bContainer.innerHTML+=h;
    //* altKey ctrlKey shiftKey
    h+=`${event.altKey}`
    h+=`${event.ctrlKey}`
    h+=`${event.shiftKey}`
    //* button 
    h+=`${event.shiftKey}`
}

// button.addEventListener('mousedown'),() => {

// }


// button.addEventListener('contextmenu',()=>{

// })


// no 
button.onClick = () => {
    console.log('ok');
}


//? Mouse Event 
//* for addEventListener  
//* mouseover 
//* mouseout 
//* mouseenter 
//* mouseleave 
//* mousemove


//? Keyboard Event
//* for addEventListener  
//* keydown 
//* keypress 
//* keyup 
//* keyCode 
//* charCode

//? for keydown
//* event.key 
//* event.code 
//* event.altKey 
//* event.ctrlKey
//* event.shiftKey
//* event.repeat

//? TouchScreen Event 
//* click 
//* touchstart 
//* touchend 
//* touchend 
//* touchmove
//* event.touches.property-name

//? Event Capturing and Event Bubbling (stopPropagation)
main = document.querySelector('#main');
main.addEventListener('click',mainClicked);
document.body.addEventListener('click',bodyClicked);

function mainClicked(event){
    main.innerHTML+='Main is Clicked';   
    event.stopPropagation(); //stop flow 
}

function bodyClicked(event){
    main.innerHTML+='body Clicked';
}


//? removeEventListener() and preventDefault() method 

//? removeListener()
let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let para = document.querySelector('#para');


//* removeEventListener 
btn.addEventListener('click',btnHandlers);
function btnHandlers(event){
    para.innerHTML+='btnHandler is run ';
    btn.removeEventListener('click',btnHandlers);
}


//* preventDefault()
input.addEventListener('keypress',inputKeyPressed);
function inputKeyPressed(event){
    event.preventDefault();
}

document.addEventListener('contextmenu',(event) => event.preventDefault() ); // lock page for right click 



//? event Delegation 
let ul = document.querySelector('ul');
ul.addEventListener('click',ulHandler);

function ulHandler(event){
    para.textContent = event.target.textContent;
}

//? DOMContentLoaded 
document.addEventListener('DOMContentLoaded',runjavascriptCodes);
function runjavascriptCodes(){
    console.log('Run');
}
















