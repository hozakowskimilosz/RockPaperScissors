'use strict';

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let playerChoice = '';

const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const thinking = document.querySelector('.thinking');

rock.addEventListener('click', function () {
  playerChoice = 'Rock';
  rock.style.backgroundColor = '#5fe42e';
  paper.style.backgroundColor = 'white';
  scissors.style.backgroundColor = 'white';
});

paper.addEventListener('click', function () {
  playerChoice = 'Paper';
  paper.style.backgroundColor = '#5fe42e';
  rock.style.backgroundColor = 'white';
  scissors.style.backgroundColor = 'white';
});

scissors.addEventListener('click', function () {
  playerChoice = 'Scissors';
  scissors.style.backgroundColor = '#5fe42e';
  rock.style.backgroundColor = 'white';
  paper.style.backgroundColor = 'white';
});

submit.addEventListener('click', function () {
  const moves = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = moves[Math.trunc(Math.random() * 3)];

  //SOME OPTION SELECTED
  if (playerChoice !== '') {
    //DISPLAYING COMPUTER MESSAGES
    if (computerChoice === 'Rock') {
      thinking.textContent = 'Rock 🪨';
    } else if (computerChoice === 'Paper') {
      thinking.textContent = 'Paper 🧻';
    } else {
      thinking.textContent = 'Scissors ✂️';
    }
    //TIE
    if (playerChoice === computerChoice) result.textContent = 'Tie 👔';
    //INDIVIDUAL CASES
    else if (playerChoice === 'Rock') {
      if (computerChoice === 'Paper') {
        result.textContent = 'You lost 😥';
      } else {
        result.textContent = 'You won 🎉';
      }
    } else if (playerChoice === 'Paper') {
      if (computerChoice === 'Rock') {
        result.textContent = 'You won 🎉';
      } else {
        result.textContent = 'You lost 😥';
      }
    } else if (playerChoice === 'Scissors') {
      if (computerChoice === 'Rock') {
        result.textContent = 'You lost 😥';
      } else {
        result.textContent = 'You won 🎉';
      }
    }
  }
  //NO OPTION SELECTED
  else {
    result.textContent = `You didn't chose anything 😥`;
  }
});
//
