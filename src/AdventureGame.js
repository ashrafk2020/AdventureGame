/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";

let gameRunnig = true;
let inventory=[];
const readLine = require('readline-sync');
const playerName = readLine.question("Enter Player Name: ");

console.log(`welcome , ${playerName}!`);