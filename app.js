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
  currentBowl = this.id;
  MoveBeans(currentBowl);
});

function MoveBeans(currentBowl){
  console.log("MoveBeans");
};
