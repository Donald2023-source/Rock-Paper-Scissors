let playerMove = '';
let computerMove = '';
let result = '';
let score;
let message = ''


if (localStorage.getItem('score')) {
  score = JSON.parse(localStorage.getItem('score'));
} else {
  score = { Wins: 0, Loses: 0, Ties: 0 };
}



function selectComputerMove() {
  let randomMove = Math.random();
  if (randomMove <= 1 / 3) {
    computerMove = 'Rock';
  } else if (randomMove <= 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

}

function assignScore() {
  if (result === 'Win') {
    score.Wins += 1;
     message = `Computer Choose ${computerMove}, You won!`
  } else if (result === 'Lose') {
    score.Loses += 1;
      message = `Computer Choose ${computerMove}, You lost`
  } else if (result === 'Tie') {
    score.Ties += 1;
     message = `Computer Choose ${computerMove}, It's a tie`
  }

  localStorage.setItem('score', JSON.stringify(score));

  console.log(score);
}

function updateScore() {
  let score_tag = document.getElementById('score')
  score_tag.textContent = score.Wins
}

updateScore()

function makeMove(playerMove) {
  selectComputerMove();
  console.log(`You chose ${playerMove} and Computer chose ${computerMove}`);
  
  if (playerMove === computerMove) {
    console.log('Tie');
    result = 'Tie';
  } else if (playerMove === 'Rock' && computerMove === 'Scissors') {
    console.log('You win');
    result = 'Win';
  } else if (playerMove === 'Paper' && computerMove === 'Scissors') {
    console.log('You Lose');
    result = 'Lose';
  } else if (playerMove === 'Scissors' && computerMove === 'Paper') {
    console.log('You win');
    result = 'Win';
  } else if (playerMove === 'Scissors' && computerMove === 'Rock') {
    console.log('You Lose');
    result = 'Lose';
  } else if (playerMove === 'Paper' && computerMove === 'Rock') {
    console.log('You win');
    result = 'Win';
  } else if (playerMove === 'Rock' && computerMove === 'Paper') {
    console.log('You Lose');
    result = 'Lose';
  }

  assignScore();
  updateScore()
}


console.log('Stored score:', score);

function resetScore() {
  localStorage.clear()
  score = { Wins: 0, Loses: 0, Ties: 0 };
  localStorage.setItem('score', JSON.stringify(score));
}

const leadboard = document.querySelector('.card')
const overlay = document.querySelector('.overlay')


function closeLeadboard() {
  leadboard.classList.remove('show')
  overlay.classList.remove('show')
}

function showLeadboard() {
  leadboard.classList.add('show')
  overlay.classList.add('show')

  let leadboard_wins = document.querySelector('.wins');
  let leadboard_Loses = document.querySelector('.loses')
  let leadboard_Ties = document.querySelector('.ties')

  leadboard_wins.textContent = score.Wins;
  leadboard_Loses.textContent = score.Loses;
  leadboard_Ties.textContent = score.Ties;
  resetScore()
}

