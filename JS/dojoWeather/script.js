function hide(element) {
  var hideMe = document.querySelector(element);
  hideMe.remove();
}
function convert(select) {
  // set tempHigh and tempLow to select all the high and low temp elements
  var tempHigh = document.querySelectorAll(".high")
  var tempLow = document.querySelectorAll(".low")
  // loop through each of the 4 high and low elements
  for(var i = 0; i < 4; i++){
    // if selecting fahrenheit
    if(select.value == 'f'){
      // change each high and low to convert to fahrenheit
      tempHigh[i].innerHTML = Math.round(tempHigh[i].innerHTML * 1.8 + 32);
      tempLow[i].innerHTML = Math.round(tempLow[i].innerHTML * 1.8 + 32);
    } 
    // else (they're selecting celsius)
    else {
      // convert each high and low to celsius
      tempHigh[i].innerHTML = Math.round((tempHigh[i].innerHTML - 32) / 1.8);
      tempLow[i].innerHTML = Math.round((tempLow[i].innerHTML - 32) / 1.8);
    }
  }
}