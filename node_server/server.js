const express = require('express'),
	app	= express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	routes = require('./routes.js'),
	engine = require('ejs-mate'),
	db = require('simpledb');


db.initSync('database.json');



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.engine('ejs', engine)
	.use(bodyParser.urlencoded({extended: true}));




app.get('/get-users', routes.getUsers)
	.use(function(req, res, next) {
		res.send('<p>404</p>');
	});


// app.get('/get-users', function(req, res) {
// 	res.send(JSON.stringify(db.get('users')));
// });

// app.post('/add-user', function(req, res) {
// 	res.send(
// 		let users = db.get('users')
// 		users.push({'Test': 'Test'})
// 		db.set('users', users)
// 	);
// });

server.listen(3000, () => console.log(`Adresse du serveur : http://localhost:3000`));


