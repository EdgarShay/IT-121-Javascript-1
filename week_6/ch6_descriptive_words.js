const prompt = require("prompt-sync")({ sigint: true });

// Array of descriptive words
const adjectives = ["amazing", "brilliant", "creative", "daring", "enthusiastic", "fearless", "gracious", "honest", "intelligent", "jovial", "kind", "loyal", "motivated", "noble", "optimistic", "passionate", "reliable", "sincere", "tactful", "unwavering", "vigilant", "witty", "zealous"];

// Function that prompts the user for a name and outputs a randomly selected adjective
function generateMessage() {
  const name = prompt("What is your name? ");
  const randomIndex = Math.floor(Math.random() * adjectives.length);
  const adjective = adjectives[randomIndex];
  console.log(`Hello, ${name}! You are ${adjective}.`);
}

// Invoke the function
generateMessage();