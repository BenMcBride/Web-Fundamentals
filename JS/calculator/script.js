var displayDiv = document.querySelector("#display");
var arr = [];
var num2 = '';
var num1 = '';
var op = ''
var result = undefined;
var reResult = undefined;
function press(num){
  arr.push(num);
  if(arr.length > 1) {
    num1 = (arr.toString()).replaceAll(',', '');
    displayDiv.innerHTML = num1;
  } else {
    displayDiv.innerHTML = num;
    num1 = (arr.toString()).replaceAll(',', '');
  }
}

function setOP(operator){
  op = operator
  if(reResult != undefined) {
    console.log(num1, num2, ' op')
    num2 = reResult; 
    arr = [];
  } else {
    num2 = num1;
    arr = [];
  }
}
function calculate() {
  console.log(+num1, +num2)
  if(num1 == '') {
    displayDiv.innerHTML = "error"
  }
  if(op == "/") {
    var result = +num2 / +num1;
    displayDiv.innerHTML = result;
  }
  if(op == "*") {
    var result = +num1 * +num2;
    displayDiv.innerHTML = result;
  }
  if(op == "-") {
    var result = +num1 - +num2;
    displayDiv.innerHTML = result;
  }
  if(op == "+") {
    var result = +num1 + +num2;
    displayDiv.innerHTML = result;
  }
  if(result != undefined){
    console.log(num1, num2, ' calculate')
    num2 = result;
    reResult = result;
  }
  
}
function clr() {
  arr = [];
  op = '';
  displayDiv.innerHTML = 0;
  num2 = 0;
  num1 = '';
  reResult = undefined;
}