var scorebox = document.querySelector("#scorebox");
var savedScore = JSON.parse(localStorage.getItem("score"));
var resetScores = document.querySelector("#resetbtn");
var playerScoreDiv = document.querySelector("#playerScore");
var playerRankOl = document.querySelector("ol");

function printHighScores() {
  var highScores = JSON.parse(localStorage.getItem("score")) || [];
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  for (let i = 0; i < highScores.length; i++) {
    var playerRankLi = document.createElement("li");
    playerRankLi.innerText =
      "--- " + highScores[i].initials + ` ---\n Score: ` + highScores[i].score;
    playerRankOl.appendChild(playerRankLi);
  }
}
printHighScores();

resetScores.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
