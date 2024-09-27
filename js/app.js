// button
const button1 = document.getElementById("button1");

//TEXT
const playerRollText = document.getElementById("playerRollText");
const aiRollText = document.getElementById("aiRollText");
const result = document.getElementById("result");
const playerScoreText = document.getElementById("playerScoreText");
const aiScoreText = document.getElementById("aiScoreText");

// Variables
let playerRollValue = 0;
let aiRollValue = 0;
let playerScore = 0;
let aiScore = 0;


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
  compareNumbers();
  showPlayerResults();
  showAiResult();
});

//Function
function rollAiAndPlayer (){
  playerRollValue = getRandomInt();
  aiRollValue = getRandomInt();
}

function compareNumbers () {
  if (playerRollValue > aiRollValue) {
    result.innerHTML = "Poäng till spelare";
    playerScore++;
  }
  if (playerRollValue < aiRollValue) {
    result.innerHTML = "Poäng till datorn";
    aiScore++;
  }
  if (playerRollValue == aiRollValue) {
    result.innerHTML = "oavgjort";

  }
}

function showPlayerResults () {
  playerScoreText.innerHTML = "Du har " + playerScore + "poäng";
  aiScoreText.innerHTML = "Datorn har" + aiScore + "poäng";
}


// View
function showRollResults (){
  playerRollText.innerHTML = playerRollValue;
  aiRollText.innerHTML = aiRollValue;
}
