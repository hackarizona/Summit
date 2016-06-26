var Connection = require("../models/connection");

exports.newSource = function() {
	return "Not Yet Implemented"
}

exports.createSource = function(params) {


}


exports.getSources = function() {
	Connection.find({}, function(err, connections) {
		if (err) throw err;

		return connections;
	});
}