'use strict';

const io = require ('socket.io')(3000); 
const quiz = io.of('/quiz');


quiz.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.onAny((event, payload) => {
    console.log('EVENT: ' + event + ' Payload has been sent');
  });

  socket.on('gameStart', payload => {
    quiz.emit('gameStart', payload);
  });

  socket.on('guess', payload => {
    quiz.emit('guess', payload);
  });

  socket.on('results', payload => {
    quiz.emit('results', payload);
  });

});



