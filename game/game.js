function gameOver() {
  var wrong = new Audio("assets/wrong.mp3");
  wrong.play();
}

document.getElementById("green").addEventListener("click", function () {
  var green = new Audio("assets/green.mp3");
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
