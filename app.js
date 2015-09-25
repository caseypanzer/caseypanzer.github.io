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

$bowls.on('mousedown',function(e){
//add if statement to check if currentPlayer is greater than 0
  currentBowl = parseInt(this.id);
  moveBeans(currentBowl);
  updateScoreView();
});
$bowls.on("mouseup",function(e){
  determineCurrentPlayer();
});


function moveBeans(currentBowl){
    var numberOfBeansInBowl = boardArray[currentBowl].length;

  for (var i = 1; i <= numberOfBeansInBowl; i++) {
    var moveBowl = currentBowl + i;
    console.log("currentBowl is "+currentBowl);
    console.log("currentPlayer is "+currentPlayer);
    console.log("moveBowl is "+moveBowl);
    console.log("iteration "+i);

     if(currentPlayer === 1 && moveBowl > maxNumberOfBowls){
          moveBowl -= 14;
     }else if (currentPlayer === 2 && moveBowl > maxNumberOfBowls) {
          moveBowl = (moveBowl - 14) + 1;
     }else if(currentPlayer === 1 && moveBowl > 6 && currentBowl < 7 ){
       console.log("meow");
          moveBowl += 1;
     };

    updateModel();
    };


    function updateModel(){
      boardArray[moveBowl].push("x");
      boardArray[currentBowl].pop();
      moveBeansView(currentBowl, moveBowl);
    };

  };


//first//skip other players end bowl
  //test variables
    //-currentPlayer, currentBowl,
    // if and statement

//second//loop around board after bowl 13
  //if statement

//middle//if you land in empty bowl on your side you get all beans in adjacent bowl
  //test variables
    //-currentPlayer, currentPlayerSide, emptyBowlNumber
    //if greater than 8 then subtract other wise add based on bowl number

//last//test if game is over
  //if statement that loops through all arrays on currentPlayerSide


function moveBeansView(currentBowl, moveBowl){

  var $currentBowlBeans = $("#"+currentBowl+" .beads"),
      $moveBowl = $("#"+moveBowl+"");

    $currentBowlBeans.remove();
    $moveBowl.append("<div class = 'beads'></div>");
};
