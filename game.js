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
  getPlayerNames();
  determineFirstPlayer();
});

function getPlayerNames(){
  playerOne = window.prompt("Enter Player 1 Name","Enter Name");
  playerTwo = window.prompt("Enter Player 2 Name","Enter Name");
  $playerOneName.text(playerOne);
  $playerTwoName.text(playerTwo);
};

function determineFirstPlayer(){
  var randomNumber = Math.random();

  if(randomNumber > .5){
    $playerOneName.addClass("active-player");
    moveCounter = 1;
    alert("Your up first "+playerOne);
  }else{
    $playerTwoName.addClass("active-player");
    moveCounter = 2;
    alert("Your up first "+playerTwo);
  };
};

function determineCurrentPlayer(){
    if(moveCounter % 2 != 0){
      currentPlayer = 1;
      $playerOneName.toggleClass("active-player");
      $playerTwoName.toggleClass("active-player");
    }else{
      currentPlayer = 2;
      $playerTwoName.toggleClass("active-player");
      $playerOneName.toggleClass("active-player");
    };
};

function updateScoreView(){
  $playerOneScore.text("Score: "+boardArray[0].length)
  $playerTwoScore.text("Score: "+boardArray[7].length)
};

function updateCounter(){
  moveCounter += 1;
}
