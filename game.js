let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[randomNumber];
let gamePattern = [];
gamePattern.push(randomChosenColour);






function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    return (randomNumber);
}