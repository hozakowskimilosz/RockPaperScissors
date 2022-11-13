'use strict';

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const thinking = document.querySelector('.thinking');
let choice;

rock.addEventListener('click', function () {
  choice = 'Rock';
  rock.style.backgroundColor = '#5fe42e';
  paper.style.backgroundColor = 'white';
  scissors.style.backgroundColor = 'white';
});

paper.addEventListener('click', function () {
  choice = 'Paper';
  paper.style.backgroundColor = '#5fe42e';
  rock.style.backgroundColor = 'white';
  scissors.style.backgroundColor = 'white';
});

scissors.addEventListener('click', function () {
  choice = 'Scissors';
  scissors.style.backgroundColor = '#5fe42e';
  rock.style.backgroundColor = 'white';
  paper.style.backgroundColor = 'white';
});

submit.addEventListener('click', function () {
  let playerChoice = choice;

  const moves = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = moves[Math.trunc(Math.random() * 3)];

  if (playerChoice !== '') {
    if (computerChoice === 'Rock') {
      thinking.textContent = 'Rock 🪨';
    } else if (computerChoice === 'Paper') {
      thinking.textContent = 'Paper 🧻';
    } else {
      thinking.textContent = 'Scissors ✂️';
    }
    if (playerChoice === computerChoice) result.textContent = 'Tie 👔';
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
  } else {
    result.textContent = `You didn't chose anything 😥`;
  }
});
