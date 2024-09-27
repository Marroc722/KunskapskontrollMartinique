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
loadGame();
showResults();


// Button pressed
button1.addEventListener("click", function() {
  rollAiAndPlayer();
  showRollResults();
  compareNumbers();
  showResults();
  saveGame();
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

function showResults () {
  playerScoreText.innerHTML = "Du har " + playerScore + "poäng";
  aiScoreText.innerHTML = "Datorn har" + aiScore + "poäng";
}


// View
function showRollResults (){
  playerRollText.innerHTML = playerRollValue;
  aiRollText.innerHTML = aiRollValue;
}


// "playerScore=" + playerScore + ";"

function saveGame (){
  document.cookie = "playerScore=" + playerScore + "; expires=thu, 01 dec 2025 12:00:00:00 UTC";
  document.cookie = "aiScore=" + aiScore + "; expires=thu, 01 dec 2025 12:00:00:00 UTC";
  // TODO: Save Ai Score in Cookie.
  // TODO: Save playerscore
}

function loadGame (){
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");


  // TODO Load AI Score from Cookie.
}


playerScore = getCookie("playerScore");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
