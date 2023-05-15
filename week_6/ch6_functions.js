




const prompt = require("prompt-sync") ({ sync: true });
//Writing a function can be done using the function keyword.  
function sayHello() {
    let you = prompt("What's your name? ");
    
    console.log("Hello", you + "!");     
 //print to console
  }
  sayHello();
