const prompt = require("prompt-sync")({ sigint: true });
const adj = ["super", "wonderful", "Smart", "Happy", "careful"];

function myFun() {
    const question = prompt("What is your name? ");
    const nameAdj = Math.floor(Math.random() * adj.length);
    console.log(adj[nameAdj] + " " + question);
}

myFun();