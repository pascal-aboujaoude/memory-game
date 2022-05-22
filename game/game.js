var level = level + 1;
var started = 0;
var lost = 0;

// function gameOver() {
//   var wrong = new Audio("assets/wrong.mp3");
//   wrong.play();
// }

document.getElementById("green").addEventListener("click", function () {
  var green = new Audio("assets/green.mp3");
  var greenDiv = document.getElementById("green");
  greenDiv.style.boxShadow = "10px 20px 30px black";
  green.play();
});

document.getElementById("red").addEventListener("click", function () {
  var red = new Audio("assets/red.mp3");
  red.play();
});

document.getElementById("blue").addEventListener("click", function () {
  var blue = new Audio("assets/blue.mp3");
  blue.play();
});

document.getElementById("yellow").addEventListener("click", function () {
  var yellow = new Audio("assets/yellow.mp3");
  yellow.play();
});

function sounds() {
  var rand = [green, red, blue, yellow];
  var randSound = rand[Math.floor(Math.random() * rand.length)];
  return randSound;
}

function restartGame() {
  started = 1;
}

function gameOver() {
  started = 0;
  lost = 1;
  var wrong = new Audio("assets/wrong.mp3");
  wrong.play();
  var title = document.getElementByClassName("title-game");
  title.innerHTML = "YOU LOST, RESTART GAME";
}

var start = document.getElementById("start");
start.addEventListener("click", function () {
  var soundToPlay = sounds();
  var audio = new Audio("assets/+${soundToPlay}.mp3");
  audio.play();
});

// for (var x = 0; x < start.length; x++) {
//   if (x === randSound) {
//     title.innerHTML = "LEVEL" + level;
//   } else {
//     gameOver();
//   }
// }
