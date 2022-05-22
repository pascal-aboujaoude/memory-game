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

function nextSequence() {
  userClickedPattern = [];
  level++;
  text.innerHTML = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  document.getElementById(randomChosenColour).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(randomChosenColour).classList.remove("pressed");
  }, 100);
}

document.getElementById("green").addEventListener("click", function () {
  if (started) {
    var audio = new Audio("assets/green.mp3");
    audio.play();
    document.getElementById("green").classList.add("pressed");
    userClickedPattern.push("green");
    checkAnswer(userClickedPattern.length - 1);
    setTimeout(() => {
      document.getElementById("green").classList.remove("pressed");
    }, 100);
  } else {
    text.innerHTML = "Level" + level;
    nextSequence();
    started = true;
  }
});

document.getElementById("blue").addEventListener("click", function () {
  if (started) {
    var audio = new Audio("assets/blue.mp3");
    audio.play();
    document.getElementById("blue").classList.add("pressed");
    userClickedPattern.push("blue");
    checkAnswer(userClickedPattern.length - 1);
    setTimeout(() => {
      document.getElementById("blue").classList.remove("pressed");
    }, 100);
  } else {
    text.innerHTML = "Level" + level;
    nextSequence();
    started = true;
  }
});

document.getElementById("yellow").addEventListener("click", function () {
  if (started) {
    var audio = new Audio("assets/yellow.mp3");
    audio.play();
    document.getElementById("yellow").classList.add("pressed");
    userClickedPattern.push("yellow");
    checkAnswer(userClickedPattern.length - 1);
    setTimeout(() => {
      document.getElementById("yellow").classList.remove("pressed");
    }, 100);
  } else {
    text.innerHTML = "Level" + level;
    nextSequence();
    started = true;
  }
});

document.getElementById("red").addEventListener("click", function () {
  if (started) {
    var audio = new Audio("assets/red.mp3");
    audio.play();
    document.getElementById("red").classList.add("pressed");
    userClickedPattern.push("red");
    checkAnswer(userClickedPattern.length - 1);
    setTimeout(() => {
      document.getElementById("red").classList.remove("pressed");
    }, 100);
  } else {
    text.innerHTML = "Level" + level;
    nextSequence();
    started = true;
  }
});
