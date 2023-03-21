function hide(element) {
  var hideMe = document.querySelector(element);
  hideMe.remove();
}
function convert(select) {
  var tempHigh = document.querySelectorAll(".high")
  var tempLow = document.querySelectorAll(".low")
  for(var i = 0; i < 4; i++){
    if(select.value == 'f'){
      tempHigh[i].innerHTML = Math.round(tempHigh[i].innerHTML * 1.8 + 32);
      tempLow[i].innerHTML = Math.round(tempLow[i].innerHTML * 1.8 + 32);
    } else {
      tempHigh[i].innerHTML = Math.round((tempHigh[i].innerHTML - 32) / 1.8);
      tempLow[i].innerHTML = Math.round((tempLow[i].innerHTML - 32) / 1.8);
    }
  }
  if(select.value == 'f'){
    select.value = 'c';
    select.innerHTML = 
      "<option value='f'>ºF</option><option value='c'>ºC</option>"
  }
  else {
    select.value = 'f'
    select.innerHTML = 
      "<option value='c'>ºC</option><option value='f'>ºF</option>"
  }
}

// (32°F − 32) × 5/9 = 0°C