var scorebox = document.querySelector('#scorebox')
var savedScore = JSON.parse(localStorage.getItem('score0'))
var resetScores = document.querySelector('#resetbtn')



var scoreEl = document.createElement('div');
scoreEl.setAttribute('class', 'scoreEl');
scorebox.append(scoreEl);

var nameEl = document.createElement('h3');
nameEl.innerHTML = `Initials: ${savedScore.initials}`;
scoreEl.append(nameEl);

var score = document.createElement('p');
score.innerHTML = `Score: ${savedScore.score}`;
scoreEl.append(score);

resetScores.addEventListener('click', function() {
    localStorage.clear()
    scorebox.remove()
})