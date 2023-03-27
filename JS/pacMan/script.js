var world = [];
var notWall = 2;//was going to include a randomization that made this a blank, sushi, or onigiri
var score = 0;

// set rand variable to be a random number between 0 and 3
var rand = Math.floor(Math.random() * 4);
// function to reroll rand
function reRand(){
  rand = Math.floor(Math.random() * 4);
}
// make a random variable between 0 and 3 and a function to reroll it so it's not a 'wall' (a '1')
var notWall = Math.floor(Math.random() * 4)
// reroll notWall to not == 1
function reNotWall(){
  // if value is 1, change it until it's not
  notWall = Math.floor(Math.random() * 4);
  while(notWall == 1){ 
  notWall = Math.floor(Math.random() * 4);
  }
  return notWall;
}

var moreWalls = Math.floor(Math.random() * 4);
function mostlyWalls() {
  if(moreWalls != 1){
    moreWalls = Math.floor(Math.random() * 4)
    if(moreWalls != 1){
      moreWalls = Math.floor(Math.random() * 4)
      if(moreWalls != 1){
        moreWalls = Math.floor(Math.random() * 4)
      }
    }  
  }
  else {
    moreWalls = Math.floor(Math.random() * 4)
  }
}


// run function to make sure notWall isn't 1;
reNotWall();
var maxWorldSize = 20;
for(var i = 0; i < maxWorldSize; i++){
  world.push([])
  for(var n = 0; n < maxWorldSize; n++){
    // if it's pushing top or bottom rows, or left or right columns, make them walls
    if(i == 0 || i == maxWorldSize - 1 || n == 0 || n == maxWorldSize - 1) {
      world[i].push(1);
    } else if(i == 1 || i == maxWorldSize - 2 || n == 1 || n == maxWorldSize - 2) {
      world[i].push(notWall);
      reNotWall();
    } else { // randomize (mostly walls)
      world[i].push(moreWalls);
      mostlyWalls();
    }
  }
}

// set start point to blank
world[1][1] = 0;
// set below start point to blank
world[2][1] = 0;

var switchers = 0;
function switchy() {
  if(switchers == 0){
    switchers = 1;
  } else {
    switchers = 0;
  }
  return switchers;
}
function reSwitchy() {
  switchers = Math.floor(Math.random() * 2);
}

function addPaths(){
  for(var i = 2; i < maxWorldSize - 1; i++){
    for(var j = 2; j < maxWorldSize - 1; j++){
      // if spaces above and to left are walls
      if((world[j - 1][i] == 1 && world[j][i - 1] == 1) && i < maxWorldSize - 2){
        // make one to right not a wall
        world[j][i + 1] = notWall;
        reNotWall();
        // and make current space not a wall
        world[j][i] = moreWalls;
        reNotWall();
        // if the space above is a wall
        if(world[j - 1][i] == 1){
          // make space above not a wall
          world[j - 1][i] = notWall;
          // make current space random (but most likely a wall)
          world[j][i] = moreWalls;
          reNotWall();
          mostlyWalls();
        }
        else if(world[j][i - 1] == 1) {
          world[j][i - 1] = notWall;
          world[j][i] = moreWalls;
          reNotWall();
          mostlyWalls();
        }
      }
      // if any space around current is a wall
      else if(world[j - 1][i] == 1 || world[j][i - 1] == 1 || world[j + 1][i] == 1 || world[j][i + 1] == 1){
        // if only space above is a wall
        if(world[j - 1][i] == 1 && world[j][i - 1] != 1 && world[j + 1][i] != 1 && world[j][i + 1] != 1) {
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        //  if only space to left is a wall
        else if(world[j - 1][i] != 1 && world[j][i - 1] == 1 && world[j + 1][i] != 1 && world[j][i + 1] != 1){
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if only space below is a wall
        else if(world[j - 1][i] != 1 && world[j][i - 1] != 1 && world[j + 1][i] == 1 && world[j][i + 1] != 1) {
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if only space to right is wall
        else if(world[j - 1][i] != 1 && world[j][i - 1] != 1 && world[j + 1][i] != 1 && world[j][i + 1] == 1){
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if only spaces below and to right are walls
        else if(world[j - 1][i] != 1 && world[j][i - 1] != 1 && world[j + 1][i] == 1 && world[j][i + 1] == 1){
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if only spaces above and to right are walls
        else if(world[j - 1][i] == 1 && world[j][i - 1] != 1 && world[j + 1][i] != 1 && world[j][i + 1] == 1){
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if spaces above and to left are walls
        else if(world[j - 1][i] == 1 && world[j][i - 1] == 1 && world[j + 1][i] != 1 && world[j][i + 1] != 1){
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if spaces below and to left are walls
        else if(world[j - 1][i] != 1 && world[j][i - 1] == 1 && world[j + 1][i] == 1 && world[j][i + 1] != 1){
          // create random space
          world[j][i] = moreWalls;
          mostlyWalls();
        }
        // if all spaces are walls, create anything except a wall + create change
        // space above or to the left to be not a wall
        else {
          world[j][i] = notWall;
          world[j - switchy()][i - switchy()] = notWall;
          reSwitchy();
          reNotWall();
        }
      } // else (spaces around current aren't walls)
      else {
        // make current a wall and space below and to the right a wall
        world[j][i] = 1;
        world[j + switchy()][i + switchy()] = 1;
        switchy();
        world[j + switchy()][i + switchy()] = 1;
        reSwitchy();
      }
      if(i == 9 || j == 9){
        world[i][j] = notWall;
        reNotWall;
      }
      // if spaces below or to right are walls
    }
  }
  drawWorld();
}


var worldDict = {
  0: "blank",
  1: "wall",
  2: "sushi",
  3: "onigiri",
};

function drawWorld() {
  output = "";
  for (var row = 0; row < world.length; row++) {
    output += "<div class = 'row'>";
    for (var x = 0; x < world[row].length; x++) {
      output += "<div class = '" + worldDict[world[row][x]] + "'></div>";
    }
    output += "</div>";
  }
  document.getElementById("world").innerHTML = output;
}
addPaths();


var ninjaman = {
  x: 1,
  y: 1,
};

function drawNinjaman() {
  document.getElementById("ninjaman").style.top = ninjaman.y * 40 + "px";
  document.getElementById("ninjaman").style.left = ninjaman.x * 40 + "px";
}
drawNinjaman();

var scoreKeep = document.getElementById("score");

document.onkeydown = function (e) {
  if (e.keyCode == 37) {
    if (world[ninjaman.y][ninjaman.x - 1] != 1) {
      ninjaman.x--;
    }
  }
  if (e.keyCode == 39) {
    if (world[ninjaman.y][ninjaman.x + 1] != 1) {
      ninjaman.x++;
    }
  }
  if (e.keyCode == 38) {
    if (world[ninjaman.y - 1][ninjaman.x] != 1) {
      ninjaman.y--;
    }
  }
  if (e.keyCode == 40) {
    if (world[ninjaman.y + 1][ninjaman.x] != 1) {
      ninjaman.y++;
    }
  }
  if (world[ninjaman.y][ninjaman.x] === 2){
    world[ninjaman.y][ninjaman.x] = 0;
    score += 10;
    scoreKeep.innerHTML = score;
  } else if (world[ninjaman.y][ninjaman.x] === 3){
    world[ninjaman.y][ninjaman.x] = 0;
    score += 5
    scoreKeep.innerHTML = score;
  }
  drawWorld();
  drawNinjaman();
};