//This code is done by shiyas
let currentRoll=0;

function randomNumber(){
currentRoll=(Math.floor(Math.random() *6)+1);
document.getElementById("dice-img").src=`dice-${currentRoll}.png`
}
