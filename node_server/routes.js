const db = require('simpledb');

module.exports = {
	getUsers : function (req, res) {
		console.log(db.get('users'));
		res.send(JSON.stringify(db.get('users')));
	},
	addUser : function (req, res) {
		let users = db.get('users');
		let check = true;
		
		for (user of users) {
			if (user.login == req.body.login) {
				check = false;
				res.send({ msg: {text: 'Login already exists!', status: false} });
			}
		}

		if (check) {
			req.body.wallet = {'money': 10000}
			users.push(req.body);
			db.set('users', users);			
			res.send({ msg: {text: 'User registered!', status: true} });
		}

		console.log(db.get('users'));
	},
	login : function (req, res) {		
		let users = db.get('users');
		let check = false;
		
		for (user of users) {
			if (user.login == req.body.login && user.password == req.body.password) {
				check = true;
				res.send({ msg: {text: 'You are connected!', status: true}, user });
			}
		}

		if (!check) {
			res.send({ msg: {text: 'Invalid login or password!', status: false} });
		}

	},
	chat : function(req, res) {
	  res.sendFile(__dirname + '/chat.html', 'Test');
	},
	apichuck : function(req, res) {
	    request({
	      method: 'GET',
	      uri: 'https://api.chucknorris.io/jokes/random'
	      // headers: {'Authorization': 'Bearer ' + 'TOKEN HERE'}
	    }, function (error, response, body) {
	      if(!error && response.statusCode == 200) {
	        res.json(body);
	      }
	    })
    }
}