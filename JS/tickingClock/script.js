function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}


// seconds.style.transform = "rotate(10deg)"
// console.log(seconds.style.transform)

var secAngle = 0;
var minAngle = 0;
var hourAngle = 0;
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hour = document.getElementById('hour');
function clockHandAngles(ticks) {
  var secAngle = ticks % 60;
  secAngle = (ticks * 6) + 180;
  var minAngle = ticks % 3600;
  minAngle = (ticks * 6 / 60) + 180;
  var hourAngle = ticks % 43200;
  hourAngle = (ticks * 360 / 43200) + 180;
  secAngle %= 360;
  minAngle %= 360;
  hourAngle %= 360;
  seconds.style.transform = 'rotate(' + secAngle  + 'deg)';
  minutes.style.transform = 'rotate('+ minAngle + 'deg)';
  hour.style.transform = 'rotate('+ hourAngle + 'deg)';
}

setInterval( function() {
  var time = getSecondsSinceStartOfDay();
  clockHandAngles(time);
}, 1000);

