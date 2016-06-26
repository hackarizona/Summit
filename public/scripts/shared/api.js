var server = "http://localhost:3000";
var req = require('./ajax.js');

module.exports = {

	getSources: function() {
		var promise = req.get(server+'/sources');
		return promise;
	},
	getSources: function(data) {
		var promise = req.post(server+'/sources', data);
		return promise;
	}
};
