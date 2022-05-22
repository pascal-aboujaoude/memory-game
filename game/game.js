var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 0;

var text = document.getElementById("level-title");

document.body.addEventListener("click", function () {
  if (!started) {
    text.innerHTML = "Level " + level;
    nextSequence();
    started = true;
  }
});

document.getElementById("green").addEventListener("click", function () {
  var audio = new Audio("sounds/green.mp3");
  audio.play();
  document.getElementById("green").classList.add("pressed");
  userClickedPattern.push("green");
  setTimeout(() => {
    document.getElementById("green").classList.remove("pressed");
  }, 100);
});

document.getElementById("blue").addEventListener("click", function () {
  var audio = new Audio("sounds/blue.mp3");
  audio.play();
  document.getElementById("blue").classList.add("pressed");
  userClickedPattern.push("blue");
  setTimeout(() => {
    document.getElementById("blue").classList.remove("pressed");
  }, 100);
});

document.getElementById("yellow").addEventListener("click", function () {
  var audio = new Audio("sounds/yellow.mp3");
  audio.play();
  document.getElementById("yellow").classList.add("pressed");
  userClickedPattern.push("yellow");
  setTimeout(() => {
    document.getElementById("yellow").classList.remove("pressed");
  }, 100);
});

document.getElementById("red").addEventListener("click", function () {
  var audio = new Audio("sounds/red.mp3");
  audio.play();
  document.getElementById("red").classList.add("pressed");
  userClickedPattern.push("red");
  setTimeout(() => {
    document.getElementById("red").classList.remove("pressed");
  }, 100);
});
