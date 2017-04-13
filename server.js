var express = require('express');
var app = express();
var connections = [];
var users = [];

app.use(express.static('./pulic'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connect', function(socket) {
	connections.push(socket);
	console.log('connected: %s sockets connected', connections.length);
});


console.log('the server is running port 3000...');