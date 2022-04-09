'use strict';

const io = require ('socket.io')(3000); 
// const { Server } = require('socket.io');
// const PORT = process.env.PORT || 3001;
// const server = new Server(PORT);
const quiz = io.of('/quiz');
// require('dotenv').config();

quiz.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on('gameStart', payload => {
    console.log(payload);
    quiz.emit('gameStart', payload);
  });

  socket.on('guess', payload => {
    console.log(payload);
    quiz.emit('guess', payload);
  });

  socket.on('results', payload => {
    console.log(payload);
    quiz.emit('results', payload);
  });

});



