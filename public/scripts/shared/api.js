var server = "http://localhost:3000";
var request = require('superagent');

module.exports = {

	getConnections: function(callback) {
		request
		.get(server + '/connection')
		.end(callback);
	},

	createSources: function(data) {
		// var promise = req.post(server+'/sources', data);
		// return promise;
	}
};
