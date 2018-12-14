const express = require('express'),
	app	= express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	routes = require('./routes.js'),
	db = require('simpledb');


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
	.use(function(req, res, next) {
		res.send('<p>404</p>');
	});


server.listen(3000, () => console.log(`Adresse du serveur : http://localhost:3000`));


