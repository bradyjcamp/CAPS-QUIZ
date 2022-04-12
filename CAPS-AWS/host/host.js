'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000/quiz');

let payload = 'Welcome to our game.  Please guess a number between 1-10';

let message;
let answer;
socket.emit('gameStart', payload);

socket.on('gameStart', payload => {
  answer = Math.floor(Math.random() * ( 10 - 1 ) + 1);
  console.log(`Game started.  The correct answer is ${answer}`);
});

socket.on('guess', payload => {
  console.log(`Guess received.  The player's guess is ${payload}`);
  if ( +payload === answer) {
    message = `Congratulation!  That is correct, ${payload} is the number! Would you like to play again? Please enter y/n`;

  } else {
    message = `Ooooooh too bad.  ${payload} is incorrect.  The number is ${answer}. Would you like to play again? Please enter y/n`;
  }
  socket.emit('results', message);
});

