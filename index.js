var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('notification', msg);
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
