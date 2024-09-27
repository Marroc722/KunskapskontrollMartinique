// button
const button1 = document.getElementById("button1");

//TEXT
const playerRollText = document.getElementById("playerRollText");
const aiRollText = document.getElementById("aiRollText");


// Variables
let playerRollValue = 0;
let aiRollValue = 0;

//controllers
function getRandomInt() {
  return Math.floor(Math.random() *6)+1;
}


// program sequence
// Page load


// Button pressed
button1.addEventListener("click", function() {
  rollAiAndPlayer();
  showRollResults();
});

//Function
function rollAiAndPlayer (){
  playerRollValue = getRandomInt();
  aiRollValue = getRandomInt();
}

// View
function showRollResults (){
  playerRollText.innerHTML = playerRollValue;
  aiRollText.innerHTML = aiRollValue;
}
