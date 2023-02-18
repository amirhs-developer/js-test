//? history and location object

let back = document.getElementById('back')
let forward = document.getElementById('forward')
let go = document.getElementById('go')
let length = document.getElementById('length')
let gethref = document.getElementById('gethref');
let googleurl = document.getElementById('googleurl');
let assign = document.getElementById('assign');
let replace = document.getElementById('replace');
let reload = document.getElementById('reload');
let detailspage = document.getElementById('detailspage');
let text = document.querySelector('#text');
let userAgent = document.getElementById('useragent');
let text1 = document.querySelector('#text2');
let detailsnavigator = document.getElementById('detailsnavigator');



//? History
back.addEventListener('click', () => {history.back()})

forward.addEventListener('click', () => {history.forward()})

go.addEventListener('click', () => {history.go(2)})

length.addEventListener('click', () => {
    console.log(history.length);
})


//? location 
gethref.addEventListener('click', () => {
    alert(location.href)
})

googleurl.addEventListener('click', () => {
    location.href = 'https://google.com'
})

assign.addEventListener('click', () => {
    location.assign('https://google.com');
})

replace.addEventListener('click',() => {
    location.replace('https://google.com')
})

reload.addEventListener('click', () => {
    //true => all data loaded from server false default => some loaded from catch
    location.reload(true); 
})

detailspage.addEventListener('click', () => {
    let str = `href: ${location.href} <br/> 
    hash: ${location.hash} <br/>
    host: ${location.host} <br/>
    hostname: ${location.hostname} <br/>
    pathname: ${location.pathname} <br/>
    port: ${location.port} <br/>
    protocol: ${location.protocol} <br/>
    search: ${location.search};
    `
    text.innerHTML = str;
})

//? Navigator
userAgent.addEventListener('click', () => {
    console.log(navigator.userAgent);
    // text1.innerHTML = navigator.userAgent.toString();
})

detailsnavigator.addEventListener('click', () => {
    let str = `cookieEnabled ${navigator.cookieEnabled} <br/>
    language: ${navigator.language} <br/>
    online: ${navigator.onLine} <br/>
    platform: ${navigator.platform}
    `
    console.log(str);
})

//? screen Object 
screen.width;
screen.height;
screen.availWidth;
screen.availHeight;
window,outerHeight;
window.outerWidth;


window.innerHeight;
window.innerWidth;


//? open and close 
// pointer = open('https://google.com');
// pointer.close();

// open('','optional-name');
// open('','_blank');
// open('','_self');
// open('','_parent');
// open('','_top');
// open('','_blank','width:500px,height:400px,left:40.top:100');



//? events browser 
window.addEventListener('load', () => {
    console.log('load');
})

window.addEventListener('DOMContentLoaded',() => {
    console.log('DOMContentLoaded');
})

window.addEventListener('blur', () => {
    console.log('blur');
})

window.addEventListener('focus', () => {
    console.log('focus');
})

window.addEventListener('beforeunload', (event) =>{
    event.preventDefault();
    event.returnValue = '';
})

window.addEventListener('resize', (event) => {
    let red = Math.floor(255 * Math.random(255)); 
    let green = Math.floor(255 * Math.random(255)); 
    let blue = Math.floor(255 * Math.random(255)); 
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    console.log('ok');
})






