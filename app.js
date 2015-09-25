var boardArray = [
      [], //0 playerone
      ["x","x","x","x"], //1
      ["x","x","x","x"], //2
      ["x","x","x","x"], //3
      ["x","x","x","x"], //4
      ["x","x","x","x"], //5
      ["x","x","x","x"], //6
      [], //7 playertwo
      ["x","x","x","x"], //8
      ["x","x","x","x"], //9
      ["x","x","x","x"], //10
      ["x","x","x","x"], //11
      ["x","x","x","x"], //12
      ["x","x","x","x"], //13
    ],
    maxNumberOfBowls = 13,
    $bowls = $(".bowls");

$bowls.on('click',function(e){
//add if statement to check if currentPlayer is greater than 0
  currentBowl = parseInt(this.id);
  moveBeans(currentBowl);
  updateMoveCounter();
  determineCurrentPlayer();
  updateScoreView();
});

function moveBeans(currentBowl){
  var numberOfBeansInBowl = boardArray[currentBowl].length;
  var currentBowlView = currentBowl;

  function updateModel(){
    boardArray[moveBowl].push("x");
    boardArray[currentBowlView].pop();
    moveBeansView(currentBowlView, moveBowl);
  };

  for (var i = 1; i <= numberOfBeansInBowl; i++) {
    var moveBowl = currentBowl + i;

    if(moveBowl > maxNumberOfBowls){
      moveBowl = moveBowl - 14;
    };
    console.log(moveBowl);
    updateModel();
  };
};


//skip other players end bowl
  //test variables
    //-currentPlayer, currentBowl,
    // if and statement
//if you land in empty bowl on your side you get all beans in adjacent bowl
  //test variables
    //-currentPlayer, currentPlayerSide, emptyBowlNumber
    //if greater than 8 then subtract other wise add based on bowl number
//test if game is over
  //if statement that loops through all arrays on currentPlayerSide


function moveBeansView(currentBowl, moveBowl){

  var $currentBowlBeans = $("#"+currentBowl+" .beads"),
      $moveBowl = $("#"+moveBowl+"");
      console.log(moveBowl);
    $currentBowlBeans.remove();

    $moveBowl.append("<div class = 'beads'></div>");
    determineCurrentPlayer();
};
