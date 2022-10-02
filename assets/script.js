//let timerId = setInterval(() => document.getElementById("start").click(), 1000);
//setTimeout(() => { clearInterval(timerId); alert('You Lost');}, 10000);

var timeEl = document.querySelector(".btn")
var secondsLeft = 10;
var timeText = document.querySelector(".time")
timeEl.addEventListener("click", timer)

function timer() {
var gameTime = setInterval(function() {
    secondsLeft--;
    timeText.textContent = secondsLeft + " seconds left"
    if(secondsLeft == 0) {
    clearInterval(gameTime);
    timeText.textContent = "You Lost" }
  }, 1000);
}

//timeEl.addEventListener("click", timer)


// game starts on "click" of start button
//when use clicks start button timer should reset
//present a series of blanks that represent the length of  randomly chosen word
    //make an array of available words under wordList
        //randomize chosen words from wordList
//on keyboard even capture the entered key
    //if key capture matches hidden letter:display letter
//game will have a visible timer, when timer reaches 0 game is over
//if word has not be guessed before timer reaches 0 then user loses
//display message that loser has lost
// if letters are quessed correctly user wins 
//display message that user won
//total wins and losses are visible to user
//wins and loss count should carry over
//WE CAN DO THIS