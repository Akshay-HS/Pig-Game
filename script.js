let sum = 0;
let currentPlayer = 0;

function randomNumber() {
  let currentRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-img').src = `dice-${currentRoll}.png`;
  if (currentRoll == 1) {
    //sum = 0;
    if (currentPlayer == 0) {
      document.getElementById('current--0').textContent = 0;
      sum = 0;
      currentPlayer = 1;
    } else {
      document.getElementById('current--1').textContent = 0;
      sum = 0;
      currentPlayer = 0;
    }
    setCurrentValue(currentPlayer, 0);
  } else {
    setCurrentValue(currentPlayer, currentRoll);
  }
}

function setCurrentValue(currentPlayer, currentRoll) {
  sum = sum + currentRoll;
  document.getElementById(`current--${currentPlayer}`).textContent = `${sum}`;
}

function restart() {
  const Player1Score = document.getElementById('score--0');
  Player1Score.textContent = '0';
  const Player1CurrentScore = document.getElementById('current--0');
  Player1CurrentScore.textContent = '0';
  //setting score and current score of Player 2 to initial state
  const Player2Score = document.getElementById('score--1');
  Player2Score.textContent = '0';
  const Player2CurrentScore = document.getElementById('current--1');
  Player2CurrentScore.textContent = '0';
}

function HoldCurrentStored() {
  sum = 0;
  index = currentPlayer;
  if (currentPlayer == 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
  let currentvalue = document.getElementById(`current--${index}`).textContent;
  let storedvalue = document.getElementById(`score--${index}`).textContent;
  let currentvalueint = parseInt(currentvalue);
  let storedvalueint = parseInt(storedvalue);
  storedvalueint = storedvalueint + currentvalueint;
  console.log(storedvalueint);
  currentvalueint = 0;
  document.getElementById(`current--${index}`).textContent =
    currentvalueint.toString();
  document.getElementById(`score--${index}`).textContent =
    storedvalueint.toString();
}