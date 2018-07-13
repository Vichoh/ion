const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345',
	database: 'iot'
});

let userModel = {};

userModel.getUsers = (callback) => {
	if (connection) {
		connection.query('SELECT * FROM datos ORDER BY id',
			(err, rows) => {
				if (err) {
					throw err;
				} else {
					callback(null, rows);
				}
			}
		)
	}
};

userModel.insertUser = (userData, callback) => {
	if (connection) {
		connection.query(
			'INSERT INTO datos SET ?', userData,
			(err, result) => {
				if (err) {
					throw err;
				} else {
					callback(null, {
						'insertId': result.insertId
					})
				}
			}
		)
	}
}

module.exports = userModel;