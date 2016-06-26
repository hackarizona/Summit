var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var ConnectionSchema = new mongoose.Schema({
	api_key: {
		type: String,
		unique: false,
		required: true,
	},
	form_id: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Connection', ConnectionSchema);

