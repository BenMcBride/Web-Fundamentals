function hide(element) {
  var hideMe = document.querySelector(element);
  var requests = document.querySelector(".numRequests")
  requests.innerHTML--
  hideMe.remove();
}
function addFriend(friendName, friendElement) {
  var hideMe = document.querySelector(friendElement);
  var name = document.querySelector(friendName);
  var requests = document.querySelector(".numRequests")
  add = document.querySelector(".friends-bot");
  add.innerHTML += "<p class='friend-name'><i class='bi bi-person-circle friend-pic'></i>" + name.innerHTML + "</p>";
  requests.innerHTML--
  hideMe.remove();
  countFriends(".numFriends")
}
function countFriends(relative) {
  var count = document.querySelector(relative);
  count.innerHTML++
}
function editProfile() {
  var name = document.querySelector("#renamer")
  name.innerHTML = "John Doe"
}