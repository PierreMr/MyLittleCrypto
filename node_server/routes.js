const db = require('simpledb');

module.exports = {
	getUsers : function (req, res) {
		console.log(db.get('users'));
		res.send(JSON.stringify(db.get('users')));
	},
	addUser : function (req, res) {
		console.log(req.body);
		
		// let users = db.get('users');
		// users.push({'id': 'Test', 'username': 'Test'});
		// db.set('users', users);

		console.log(db.get('users'));
		res.send(JSON.stringify(db.get('users')));
	}
}