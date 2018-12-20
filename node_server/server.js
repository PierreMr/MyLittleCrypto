const express = require('express'),
	app	= express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	routes = require('./routes.js'),
	db = require('simpledb')
	io = require('socket.io')(server)
	request = require('request')
	WebSocketServer = require('websocket').server;


db.initSync('database.json');



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.json());




app.get('/get-users', routes.getUsers)
	.post('/add-user', routes.addUser)
	.post('/login', routes.login)
	.get('/chat', routes.chat)
	.get('/apichuck', routes.apichuck)
	.use(function(req, res, next) {
		res.send('<p>404</p>');
	});


server.listen(3000, () => console.log(`Adresse du serveur : http://localhost:3000`));


// Socket.IO

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});


// WebSocketServer

// wsServer = new WebSocketServer({
//     httpServer: server,
//     // You should not use autoAcceptConnections for production
//     // applications, as it defeats all standard cross-origin protection
//     // facilities built into the protocol and the browser.  You should
//     // *always* verify the connection's origin and decide whether or not
//     // to accept it.
//     autoAcceptConnections: false
// });


// function originIsAllowed(origin) {
//   // put logic here to detect whether the specified origin is allowed.
//   return true;
// }

// wsServer.on('request', function(request) {
//     if (!originIsAllowed(request.origin)) {
//       // Make sure we only accept requests from an allowed origin
//       request.reject();
//       console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
//       return;
//     }
    
//     var connection = request.accept('echo-protocol', request.origin);
//     console.log((new Date()) + ' Connection accepted.');
//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log('Received Message: ' + message.utf8Data);
//             connection.sendUTF(message.utf8Data);
//         }
//         else if (message.type === 'binary') {
//             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//             connection.sendBytes(message.binaryData);
//         }
//     });
//     connection.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });
// });