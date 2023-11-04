function HoldCurrentStored(index) {
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
