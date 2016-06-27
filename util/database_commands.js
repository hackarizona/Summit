var mongoose = require('mongoose');
var Connection = require('../models/connection');


mongoose.connect('mongodb://localhost:27017/summit');

module.exports = {

	dropConnections: function() {
		Connection.remove({}, function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log('success');
			}
		});
	}
}

module.exports.dropConnections();