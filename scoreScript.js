var scorebox = document.querySelector('#scorebox')
var savedScore = JSON.parse(localStorage.getItem('score'))
var resetScores = document.querySelector('#resetbtn')
var playerScoreDiv = document.querySelector('#playerScore')
var playerRankOl = document.querySelector('ol')

console.log(savedScore)



// var scoreEl = document.createElement('div');
// scoreEl.setAttribute('class', 'scoreEl');
// scorebox.append(scoreEl);

// var nameEl = document.createElement('h3');
// nameEl.innerHTML = `Initials: ${savedScore.initials}`;
// scoreEl.append(nameEl);

// var score = document.createElement('p');
// score.innerHTML = `Score: ${savedScore.score}`;
// scoreEl.append(score);

resetScores.addEventListener('click', function() {
    localStorage.clear()
})
function printHighScores() {
    var highScores = JSON.parse(localStorage.getItem("score")) || [];
highScores.sort(function(a, b) {
    return b.score - a.score;
})
for (let i = 0; i < highScores.length; i++) {
    var playerRankLi = document.createElement('li');
    playerRankLi.textContent = highScores[i].initials + " - " + highScores[i].score;
    playerRankOl.appendChild(playerRankLi)

}
}
printHighScores();
