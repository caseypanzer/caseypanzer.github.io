var playerOne = "Player One",
    playerTwo = "Player Two",
    playerOneScore = 0,
    playerTwoScore = 0,
    $startButton = $("#start-button"),
    $playerOneScore = $("#player-one-score"),
    $playerTwoScore = $("#player-two-score"),
    $playerOneName = $("#player-one-name"),
    $playerTwoName = $("#player-two-name"),
    currentPlayer = 0,
    moveCounter = 0;

$startButton.on("click", function(){
  console.log("hello");
});

function getPlayerNames(){
  playerOne = window.prompt("sometext","defaultText");
  playerTwo = window.prompt("sometext","defaultText");
}


function determineFirstPlayer(){
  var randomNumber = Math.random();

  if(randomNumber > .5){
    $playerOneName.toggleClass("active-player");
    return currentPlayer = 1;
  }else{
    $playerTwo.Name.toggleClass("active-player");
    return currentPlayer = 2;
  }
};

function determineCurrentPlayer(){

}
