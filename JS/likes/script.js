function logout(element) {
  if (element.innerHTML === "Login") {
    element.innerHTML = "Logout";
  } else {
    element.innerHTML = "Login";
  }
}
function hide(element) {
  element.remove();
}

function like(relative) {
  var likes = document.querySelector(relative)
  likes.innerHTML++
}