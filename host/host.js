'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3000/quiz');

let payload = 'gameStart working!';
socket.emit('gameStart', payload);

