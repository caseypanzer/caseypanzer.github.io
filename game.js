var playerOne = "Player One",
    playerTwo = "Player Two",
    playerOneScore = 0,
    playerTwoScore = 0,
    $startButton = $(),
    $playerOneScore = $(),
    $playerTwoScore = $(),
    $playerOneName = $(),
    $playerTwoName = $(),
    currentPlayer = 1;

$startButton.on("click", function(){

});

function determineFirstPlayer(){
  var randomNumber = Math.random();

  if(randomNumber > .5){
    $playerOneName.toggleClass("active-player")
  }else{
    $playerTwo.Name.toggleClass("active-player")
  }
};

function determineCurrentPlayer(){

}
