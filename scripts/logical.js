//? Logical Operators 

let checked; //undefined 

//? Not Operator
checked = !true; //false 
checked = !false; //true 
checked = !0; //true 
checked = !1; //false 
checked = !'ok'; //false 
checked = !null; //true

//? AND Operator
checked = true && true; //true
checked = false && false; //false 
checked = true && false; //false 
checked = false && true; //false 
checked = 'ok' && true; //true 
checked = true && 'ok'; //ok
checked = 'ok' && false; //false 
checked = false && 'ok'; //false 
checked = true && true && false && true; //false 

//? OR Operator 
checked = true || true; //true 
checked = true || false; //true 
checked = false || true; //true 
checked = false || false; //false 
checked = false || 'ok'; //ok
checked = true || 'ok'; //true
checked = true || true || false; //true 

console.log(checked); 
