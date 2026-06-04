var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var randomNumber;
function nextSequence(){
    randomNumber = Math.floor(Math.random()*4);
}
nextSequence();
var randomChosenColour=buttonColours[randomNumber];

console.log(randomChosenColour);




