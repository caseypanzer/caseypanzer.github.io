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
    playerOneSide = [1,2,3,11,12,13],
    playerTwoSide = [4,5,6,8,9,10],
    maxNumberOfBowls = 13,
    playerOneScoringBowl = 0,
    playerTwoScoringBowl = 7,
    $bowls = $(".bowls"),
    $side = $("side");

$bowls.on('mousedown',function(e){
//add if statement to check if currentPlayer is greater than 0
  currentBowl = parseInt(this.id);
  moveBeans(currentBowl);
});
$bowls.on("mouseup",function(e){
  // determineCurrentPlayer();
  updateScoreView();
});
$bowls.on("click", function(e){
  currentSide = this.id;
  if (currentSide = "side-one"){
    var testArray = playerOneSide;
  }else{
    var testArray = playerTwoSide;
  }
});

function moveBeans(currentBowl){
    var numberOfBeansInBowl = boardArray[currentBowl].length;

    for (var i = 1; i <= numberOfBeansInBowl; i++) {
      var moveBowl = currentBowl + i;

       if(currentPlayer === 1 && moveBowl > maxNumberOfBowls){
            moveBowl -= 14;
       }else if (currentPlayer === 2 && moveBowl > maxNumberOfBowls){
            moveBowl = (moveBowl - 14) + 1;
       }else if(currentPlayer === 1 && moveBowl > 6 && currentBowl < 7 ){
            moveBowl += 1;
       };
      //  console.log("currentPlayer is "+currentPlayer);
      //  console.log("moveBowl is "+moveBowl);
      //  console.log("finalBowl is"+finalBowl);
      //  console.log("iteration "+i);

      updateModel();
      };
      determineFinalBowl(currentBowl,numberOfBeansInBowl);
    function updateModel(){
      boardArray[moveBowl].push("x");
      boardArray[currentBowl].pop();
      moveBeansView(currentBowl, moveBowl);
    };
  };

  function determineFinalBowl(currentBowl,numberOfBeansInBowl){
    var finalBowl = currentBowl+numberOfBeansInBowl;

    if(currentPlayer === 1 && finalBowl > maxNumberOfBowls){
         finalBowl -= 14;
        //  console.log("woof"+"-"+currentBowl+"-"+numberOfBeansInBowl+"-"+finalBowl);
    }else if (currentPlayer === 2 && finalBowl > maxNumberOfBowls){
         finalBowl = (finalBowl - 14) + 1;
        //  console.log("bark"+"-"+currentBowl+"-"+numberOfBeansInBowl+"-"+finalBowl);
    }else if(currentPlayer === 1 && finalBowl > 6 && currentBowl < 7 ){
         finalBowl += 1;
        //  console.log("meow"+"-"+currentBowl+"-"+numberOfBeansInBowl+"-"+finalBowl);
    }else{
      finalBowl = finalBowl;
      // console.log("purr"+"-"+currentBowl+"-"+numberOfBeansInBowl+"-"+finalBowl);
    };
    moveBonus(finalBowl);
    if (boardArray[finalBowl].length) && side = your side){
      bonusModel(finalBowl);
    }
    //bonusModel(finalBowl);if length if finalBowl is one then run scoreBonus
  };

  function moveBonus(finalBowl){
    if (currentPlayer === 1 && finalBowl === playerOneScoringBowl){
      currentPlayer = 1;
    }else if (currentPlayer === 2 && finalBowl === playerTwoScoringBowl ){
      currentPlayer = 2;
    }else{
      determineCurrentPlayer();
    };

  };

  function bonusModel(finalBowl){
    var emptyBowlIndex = testArray.indexOf(finalBowl)
        console.log("meow")
        console.log("finalBowl ="+finalBowl);
        console.log("finalBowl length="+finalBowl.length);
        console.log("oppositeBowl ="+oppositeBowl);
        console.log("oppositeBowl length="+oppositeBowl.length);

    if(emptyBowlIndex < 3){
      var oppositeBowl = testArray[i+3];
    }else{ oppositeBowl = testArray[i-3];
    };

    if(currentPlayer = 1){
      var scoringBowl = playerOneScoringBowl;
    }else{
      scoringBowl = playerTwoScoringBowl;
    };

    debugger;

    for (var i = 0; i < testArray[oppositeBowl].length; i++) {
      if (currentPlayer === 1) {
        boardArray[playerOneScoringBowl].push("x");
      }else{
        boardArray[playerTwoScoringBowl].push("x");
        };
      boardArray[oppositeBowl].pop();
      };

    boardArray[finalBowl].pop();
    boardArray[scoringBowl].push("x");
  };

function moveBeansView(currentBowl, moveBowl){

  var $currentBowlBeans = $("#"+currentBowl+" .beads"),
      $moveBowl = $("#"+moveBowl+"");

    $currentBowlBeans.remove();
    $moveBowl.append("<div class = 'beads'></div>");
};

function bonusView(currentScoringBowl, moveBowl){

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
  //if statement that loops through all arrays on currentPlayerSide and if all arrays lenth equal zero then sweep all remaining beans to opposite player and declare winner
