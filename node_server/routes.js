const db = require('simpledb');

module.exports = {
	getUsers : function (request, response) {
		console.log(db.get('users'));
		response.send(JSON.stringify(db.get('users')));
	},
	addUser : function (request, response) {
		let users = db.get('users');
		let check = true;
		
		for (user of users) {
			if (user.login == request.body.login) {
				check = false;
				response.send({ msg: {text: 'Login already exists!', status: false} });
			}
		}

		if (check) {
			request.body.wallet = {'money': 10000}
			users.push(request.body);
			db.set('users', users);			
			response.send({ msg: {text: 'User registered!', status: true} });
		}

		console.log(db.get('users'));
	},
	login : function (request, response) {		
		let users = db.get('users');
		let check = false;
		
		for (user of users) {
			if (user.login == request.body.login && user.password == request.body.password) {
				check = true;
				response.send({ msg: {text: 'You are connected!', status: true}, user });
			}
		}

		if (!check) {
			response.send({ msg: {text: 'Invalid login or password!', status: false} });
		}

	}
}