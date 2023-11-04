'use strict';
function Restart()
{
    // setting score and current score of Player 1 to initial state
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
