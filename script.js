'use strict';
let sum = 20;
// setCurrentValue function, sum variable, currentPlayer variable;

function setCurrentValue(currentPlayer){
    sum = sum+20;
    document.getElementById(`current--${currentPlayer}`).textContent = `${sum}`;
}
