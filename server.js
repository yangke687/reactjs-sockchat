var express = require('express');
var app = express();
var connections = [];
var users = [];

app.use(express.static('./pulic'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connect', function(socket) {
	// disconnect event
	socket.on('disconnect', function() {
		// 
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === this.id) {
				users.splice(i, 1);
			}
		}
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log('disconnected: %s sockets connected', connections.length);
		io.emit('disconnect', users);
	});
	// message added event
	socket.on('messageAdded', function(payload) {
		//console.log('message being added:', payload);
		var newMessage = payload;
		io.emit('messageAdded', newMessage);
	});
	// user joined event
	socket.on('userJoined', function(payload) {
		var newUser = {
			id: this.id,
			name: payload.name
		};

		users.push(newUser);

		io.emit('userJoined', users);
	})
	connections.push(socket);
	console.log('connected: %s sockets connected', connections.length);
});

console.log('the server is running port 3000...');