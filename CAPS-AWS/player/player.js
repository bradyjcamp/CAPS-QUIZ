'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000/quiz');
const prompt = require('prompt');

prompt.start();

let guess = 0;

function playAgain(){
  prompt.get(['answer'], (error,result) => {
    if (error) {
      console.log(error);
    }
    let answer = (result.answer.toLowerCase());
    if(answer === 'y'){
      socket.emit('gameStart', 'Yeah! Let\'s play again! Please enter a number between 1 and 10');
    } else if(answer === 'n'){
      console.log('Okay, Thanks for playing!');
      process.exit();
    } else {
      console.log('Invalid input. Please enter y/n');
      playAgain();
    }
  });

}

function getGuess(payload){
  console.log(payload);
  prompt.get(['guess'], (error,result) => {
    if (error) {
      console.log(error);
    }
    guess = (result.guess);
    if(guess > 10){
      getGuess('Please enter number between 1 and 10');
    }
    else if(guess > 0){
      socket.emit('guess', guess);
    }
  });
}

socket.on('gameStart', payload => {
  getGuess(payload);
});
  
socket.on('results', payload => {
  console.log(payload);
  playAgain();
});

