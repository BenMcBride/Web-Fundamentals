console.log("page loaded...");
function over(element) {
  element.play();
  element.muted = true;
}
function out(element) {
  element.pause();
}
var playing = false;
function start(element) {
  if (playing === false) {
    element.play();
    playing = true;
  } else {
    element.pause();
    playing = false;
  }
}