let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+randomChosenColour +".mp3");
    audio.play();
}

