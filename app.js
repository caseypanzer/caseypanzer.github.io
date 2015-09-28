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
    playerOneSide = [1,2,3,13,12,11],
    playerTwoSide = [4,5,6,10,9,8],
    maxNumberOfBowls = 13,
    playerOneScoringBowl = 0,
    playerTwoScoringBowl = 7,
    testArray = [],
    $bowls = $(".bowls"),
    $side = $(".side");

$bowls.on('mousedown',function(e){
//add if statement to check if currentPlayer is greater than 0
//add if statement to lock side of board according to whose turn it is
  currentBowl = parseInt(this.id);
  moveBeans(currentBowl);
});
$bowls.on("mouseup",function(e){
  updateScoreView();
});
// $side.on("click", function(e){
//   console.log("hello");
//
//   testSide();
//
//   function testSide (){
//     if (this.id = "side-one"){
//       testArray = playerOneSide;
//     }else{
//       testArray = playerTwoSide;
//     };
//   };
//   console.log("this is testArray"+testArray);
// });

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
    }else if (currentPlayer === 2 && finalBowl > maxNumberOfBowls){
         finalBowl = (finalBowl - 14) + 1;
    }else if(currentPlayer === 1 && finalBowl > 6 && currentBowl < 7 ){
         finalBowl += 1;
    }else{
      finalBowl = finalBowl;
          };
    moveBonus(finalBowl);
    if (boardArray[finalBowl].length === 1){
      // FIXME: add side test
      console.log(boardArray[finalBowl].length);
      console.log(finalBowl);
      bonusModel(finalBowl);
    };
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
    var emptyBowlIndex = undefined;

    if(currentPlayer === 1){
      testArray = playerOneSide;
      emptyBowlIndex = testArray.indexOf(finalBowl)
    }else{
      testArray = playerTwoSide;
      emptyBowlIndex = testArray.indexOf(finalBowl)
    };
    console.log("this is emptybowl index "+emptyBowlIndex);
    console.log("this is test array "+testArray);
    console.log("this is final bowl "+finalBowl);
    console.log("this is currentPlayer "+currentPlayer);

    if (emptyBowlIndex != 1){

      if(emptyBowlIndex < 3){
        var oppositeBowl = testArray[emptyBowlIndex+3];
      }else{ oppositeBowl = testArray[emptyBowlIndex-3];
      };

      if(currentPlayer === 1){
        var scoringBowl = playerOneScoringBowl;
      }else{ scoringBowl = playerTwoScoringBowl;
      };

      console.log("meow")
      console.log("oppositeBowl ="+oppositeBowl);
      console.log("oppositeBowl length="+boardArray[oppositeBowl].length);

      for (var i = 0; i < boardArray[oppositeBowl].length; i++) {
        if (currentPlayer === 1){
          boardArray[playerOneScoringBowl].push("x");
        }else{
          boardArray[playerTwoScoringBowl].push("x");
        };
        bonusView(oppositeBowl, scoringBowl);
        boardArray[oppositeBowl].pop();
        };

      boardArray[finalBowl].pop();
      boardArray[scoringBowl].push("x");
      bonusView(finalBowl, scoringBowl);

    };
  };

function moveBeansView(currentBowl, moveBowl){

  var $currentBowlBeans = $("#"+currentBowl+" .beads"),
      $moveBowl = $("#"+moveBowl+"");

    $currentBowlBeans.remove();
    $moveBowl.append("<div class = 'beads'></div>");
};

function bonusView(oppositeBowl, scoringBowl){
  var $oppositeBowlBeans = $("#"+oppositeBowl+" .beads"),
      $scoringBowl = $("#"+scoringBowl+"");

    $oppositeBowlBeans.remove();
    $scoringBowl.append("<div class = 'beads'></div>");
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
  //sum the length of all of the arrays to detemine how many time to push and then set the array equal to zero.
  //
  //variables PlayerOneSide, PlayerTwoSide,
