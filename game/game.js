var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var text = document.getElementById("level-title");

document.body.addEventListener("click", function () {
  if (!started) {
    text.innerHTML = "Level" + level;
    nextSequence();
    started = true;
  }
});

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {
  if (currentLevel === 9) {
    text.innerHTML = "Congratulations, you Won!";
  } else {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      var audio = new Audio("assets/wrong.mp3");
      audio.play();

      document.body.classList.add("game-over");
      setTimeout(() => {
        document.body.classList.remove("game-over");
      }, 200);

      text.innerHTML = "Game Over, Press Any Button to Restart";
      startOver();
    }
  }
}

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
