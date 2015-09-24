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

function moveBeansView(currentBowl, moveBowl){
  var $currentBowlBeans = $("#1:nth-child(1)"),
      $moveBowl = $("#"+moveBowl+"");
  console.log($currentBowlBeans);
    $currentBowlBeans.remove();
  console.log($moveBowl);
};
