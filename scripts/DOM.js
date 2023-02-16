console.log("DOM");
// document.getElementById('')
// document.getElementsByTagName('')
// document.getElementsByClassName('')
// document.querySelector('')
// document.querySelectorAll('')
console.log(document.body);
console.log(document.head);
console.log(document.images);
console.log(document.forms);

//? DOM Traversing
let container = document.getElementById("container");
let heading = document.getElementById('heading');
console.log(heading.nextSibling.nodeName); //text 
console.log(heading.previousSibling.nodeName); //text 
console.log(heading.nextElementSibling.nodeName); //p
console.log(heading.previousElementSibling); // null 

console.log(heading.parentNode.childNodes);
console.log(heading.parentNode.childNodes.length);
console.log(heading.parentNode.children);
console.log(heading.parentNode.children.length);


let main = document.getElementById('u-main');
console.log(main.childNodes);
console.log(main.children);

console.log(main.firstChild);
console.log(main.lastChild);

console.log(main.firstElementChild);
console.log(main.lastElementChild);



//? set Attributes and get Attributes and remove Attribute
console.log(main.getAttribute('class'));
main.setAttribute('class','newclass main class1 class2 class3 class4');
//! or 
// main.className = 'class','newclass main class1 class2 class3 class4'
main.setAttribute('title','mytitle');

console.log(main.getAttribute('class'))
console.log(main.getAttribute('title'));

main.removeAttribute('mytt');
console.log(main.id); 




//? show customize attributes (dataset)
console.log(main.dataset.user); 
console.log(main.dataset.dateOfBirth);

//? classList and className Attribute
console.log(main.className); //return string of classes 
console.log(main.classList); // return array of classes
main.classList.add('class5');
console.log(main.classList);
main.classList.remove('class5');
console.log(main.classList); 
main.classList.toggle('class5');
console.log(main.classList);
setTimeout(()=>{
    main.classList.toggle('class5');
    console.log(main.classList);
},10000)

main.classList.replace('class1','class4');
console.log(main.classList);
console.log(main.classList.contains('class4'));


//? createElement() and createTextNode() and appendChild() method and textContent property
let p1 = document.createElement('p');
let text = document.createTextNode('This is a paragraph');
p1.appendChild(text);
main.appendChild(p1);

let p2 = document.createElement('p');
p2.textContent = 'this is new paragraph';
// p2.style.color = 'red';
p2.setAttribute('style','color:green');
main.appendChild(p2);
if(p2 !== null) {
    let button = document.createElement('button');
    button.style.width = "100px";
    button.style.height = '40px';
    button.textContent= "ok";
    button.style.backgroundColor = '#cccccc';
    main.appendChild(button);
}


//? Insert to DOM or Markup Insertion => innerHTML and outerHTML and innerText
let ul = document.querySelector('ul');
console.log(ul.innerHTML);
ul.innerHTML += `<li>cpp</li>`

console.log(ul.outerHTML);

let first_li = document.querySelector('ul > li');
first_li.textContent = 'java';
first_li.nextElementSibling.textContent = 'Dart';
let second_el = first_li.nextElementSibling;
second_el.setAttribute('style','color:blue');



document.head.innerHTML+=`
   <style>
   p{
   }
   </style>
`;



//? CSS Styles in Js 

ul = document.querySelector('ul');
ul.style.color = '';
ul.style.fontSize = '';
ul.style.backgroundColor = '';

ul.style['padding'] = '';
ul.style['margin'] = '';
ul.style['fontW-wight'] = '';

ul.classList.add('bg-red');
ul.classList.add('bg-p2');
ul.classList.remove('class12');
ul.classList.add('open');
ul.classList.toggle('open');

//? read Property from styles 
console.log(ul.style.color);
console.log(ul.style.padding);

//? getComputedStyles 
let styles = getComputedStyle(ul);
console.log(styles.getPropertyValue('border'));
console.log(styles.getPropertyValue('color'));
console.log(styles.getPropertyValue('font-size'));
console.log(styles.getPropertyValue('margin'));
console.log(styles.getPropertyValue('width'));
console.log(styles.getPropertyValue('height'));






