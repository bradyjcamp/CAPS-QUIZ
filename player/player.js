'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000/quiz');

socket.on('gameStart', payload => {
  socket.emit('guess', 12);
});