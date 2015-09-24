var playerOne = "Player One",
    playerTwo = "Player Two",
    boardArray = [
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
    $bowls = $(".bowls");

$bowls.on('click',function(e){
  currentBowl = parseInt(this.id);
  moveBeans(currentBowl);
});

function moveBeans(currentBowl){
  var numberOfBeansInBowl = boardArray[currentBowl].length;

  for (var i = 1; i <= numberOfBeansInBowl; i++) {
    var moveBowl = currentBowl + i

    boardArray[moveBowl].push("x")
    boardArray[currentBowl].pop();
    moveBeansView(currentBowl, moveBowl);
  };
};


//skip other players end bowl
  //test variables
    //-currentPlayer, currentBowl,
  // if and statement

//if you land in empty bowl on your sideyou get all beans in adjacent bowl
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
};
