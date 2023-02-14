
document.querySelector('#CreateRandomNumber').addEventListener('click', function(){
    let minimumNumber = parseInt(document.getElementById('minNumber').value);
    console.log(minimumNumber);
    let maximumNumber = parseInt(document.getElementById('maxNumber').value);
    console.log(maximumNumber);
    if(minimumNumber === "" && maximumNumber === ""){
        return;
    }
    let res = document.getElementById('resposne-random-number');
    res.innerText = (Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber).toString();
})  


// let buttonRandom = document.getElementById('CreateRandomNumber');
// buttonRandom.addEventListener('click', function(){
//     alert('ok');
// })


// const CreateNumber = function(){
//     let minimumNumber = document.getElementById('#minNumber').value;
//     console.log(minimumNumber);
//     let maximumNumber = document.getElementById('#maxNumber').value;
//     console.log(maximumNumber);
//     if(minimumNumber === "" && maximumNumber === ""){
//         return;
//     } 
// }
let seconds="00";
let minuets ="00";
let t;
let secondsText = document.getElementById("seconds");
let minuetsText = document.getElementById("minute");

const Start = function(){
    seconds++;
        if(seconds < 9){
            seconds = "0" + seconds;
        }
        if(seconds > 9){
            seconds = seconds;
        }
        if(seconds >= 59){
            seconds=0;
            minuets++;
            if(minuets < 9)
                minuets = "0" + minuets;
            if(minuets > 9)
                minuets = minuets;
        }
        secondsText.innerHTML = seconds.toString();
        minuetsText.innerHTML = minuets.toString();
    t = setTimeout(Start,1000);
    }

    const Stop = function(){
        clearTimeout(t);
    }

