'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000/quiz');
const prompt = require('prompt');

prompt.start();

const properties = [{
  guess: 'guess',
}];

let guess;

socket.on('gameStart', payload => {
  console.log(payload);
  prompt.get(properties, (error,result) => {
    if (error) {
      console.log(error);
    }
    guess = (result.question);
  });
  setTimeout(() => {
    socket.emit('guess', guess);
  }, 5000);
});

socket.on('results', payload => {
  console.log(payload);
});

