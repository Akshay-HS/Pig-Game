let sum = 0;
let currentPlayer = 0;
//
var storedData = sessionStorage.getItem('players');
if (storedData) {
  var players = JSON.parse(storedData);
  document.getElementById('name--0').textContent = players.player1;
  document.getElementById('name--1').textContent = players.player2;
} else {
  // Handle the case when the data is not found in session storage
  alert(
    'Player names not found in session storage. Please enter names on the previous page.'
  );
}
//
function randomNumber() {
  let currentRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-img').src = `dice-${currentRoll}.png`;
  if (currentRoll == 1) {
    ColorSwitch();
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

  const player0Section = document.querySelector('.player--0');
  player0Section.classList.remove('player--winner');
  const player1Section = document.querySelector('.player--1');
  player1Section.classList.remove('player--winner');
}

function HoldCurrentStored() {
  ColorSwitch();
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
  checkWinner();
//   const percentage = (storedvalueint / 100) * 100;
//   updateProgressBar(index, storedvalueint);
// }
// function updateProgressBar(player, value) {
//   const progressBar = document.getElementById(`progress-bar-${player}`);
//   value = Math.max(0, Math.min(value, 100));
//   progressBar.style.height = `${value}%`; // Use height to adjust the vertical progress
}

function checkWinner() {
  const scorePlayer0 = parseInt(
    document.getElementById('score--0').textContent
  );
  const scorePlayer1 = parseInt(
    document.getElementById('score--1').textContent
  );

  if (scorePlayer0 >= 100) {
    const player0Section = document.querySelector('.player--0');
    player0Section.classList.add('player--winner');
    setTimeout(restart, 3000);
    
  }
  if (scorePlayer1 >= 100) {
    const player1Section = document.querySelector('.player--1');
    player1Section.classList.add('player--winner');
    setTimeout(restart, 3000);
    
  }
}
function ColorSwitch()
{
  let s=document.getElementsByTagName("section");
s[0].classList.toggle("player--active");
s[1].classList.toggle("player--active");
}
