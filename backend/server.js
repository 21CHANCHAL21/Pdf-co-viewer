// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('page-change', (newPageNum) => {
    // Broadcast the page change to all connected clients
    io.emit('page-change', newPageNum);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});