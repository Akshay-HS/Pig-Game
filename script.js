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