var server = "http://localhost:3000";
var request = require('superagent');

module.exports = {

	getConnections: function(callback) {
		request
		.get(server + '/connection')
		.end(callback);
	},

	createConnection: function(data, callback) {
		request
		.post(server + '/connection')
		.send(data)
		.end(callback);
	},

	getTestForm: function(callback) {
		request
		.get(server + "/testform")
		.end(callback);
	}
};
