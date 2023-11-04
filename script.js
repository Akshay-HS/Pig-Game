// this is common
let sum = 0;
let currentPlayer = 0;
//This code is done by shiyas

function randomNumber(){
    
    let currentRoll=(Math.floor(Math.random() *6)+1);
    document.getElementById("dice-img").src=`dice-${currentRoll}.png`

    if (currentRoll == 1){
        if(currentPlayer ==0){
            currentPlayer = 1;
        }
        else{
            currentPlayer = 0;
        }
    }
    setCurrentValue(currentPlayer, currentRoll);
}

//This code is by Alvin

// setCurrentValue function, sum variable, currentPlayer variable;
function setCurrentValue(currentPlayer, currentRoll){
    sum = sum+currentRoll;
    document.getElementById(`current--${currentPlayer}`).textContent = `${sum}`;
}

 // setting score and current score of Player 1 to initial state
 function restart()
 {
    const Player1Score=document.getElementById("score--0");
    Player1Score.textContent="0";
    const Player1CurrentScore=document.getElementById("current--0");
    Player1CurrentScore.textContent="0"; 
    //setting score and current score of Player 2 to initial state
    const Player2Score=document.getElementById("score--1");
    Player2Score.textContent="0";
    const Player2CurrentScore=document.getElementById("current--1");
    Player2CurrentScore.textContent="0";
 }

