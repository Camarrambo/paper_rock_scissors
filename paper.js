/*const scoreboard {
  wins: 0,
  losses: 0,
  ties: 0,
}
*/
const board = {
  wins: 0,
  losses:0,
  ties: 0,
  lost(){
    board.losses+=1;
    document.querySelector('.result-js')
    .innerHTML = `You lose`;
  },
  won(){
    board.wins+=1;
    document.querySelector('.result-js')
    .innerHTML = `You won`;
  },
  tie(){
    board.ties+=1;
    document.querySelector('.result-js')
    .innerHTML = `Tie`;
  }
}

let computerMove = '';
let youMove = '';
let scoreboard = 0;

function updateResult(){
  document.querySelector('.result-js')
    .innerHTML = `You `;
}

function updateMoves(){
  document.querySelector('.moves-js')
    .innerHTML = `Wins: ${board.wins} Losses: ${board.losses} Ties: ${board.ties}`;
}
function updateScoreboard(){
  document.querySelector('.scoreboard-js')
    .innerHTML = `Your move: ${youMove} Computer Move: ${computerMove}`;
}

function pickcomputerMove(){
  updateMoves();
  const randomNum = Math.random();
  if(randomNum >= 0 && randomNum < 1/3){
    computerMove='paper';
  }
  if(randomNum >= 1/3 && randomNum < 2/3){
    computerMove='rock';
  }
  if(randomNum >= 2/3 && randomNum <= 1){
    computerMove='scissors';
  }
  return computerMove;
}
function checkMove(yourMove, comMove){
  youMove = yourMove;
  if(yourMove === comMove){
    board.tie();
  }
  else if(yourMove === 'rock' && comMove ==='paper'){
    board.lost();
  }
  else if(yourMove === 'paper' && comMove ==='rock'){
    board.won();
  }
  else if(yourMove === 'scissors' && comMove ==='paper'){
    board.won();
  }
  else if(yourMove === 'rock' && comMove ==='scissors'){
    board.won();
  }
  else if(yourMove === 'paper' && comMove ==='scissors'){
    board.lost();
  }
  else if(yourMove === 'scissors' && comMove ==='rock'){
    board.lost();
  }
  updateScoreboard();
  updateMoves();
}