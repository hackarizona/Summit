var request = require('superagent');
var config = require('./config.json');
var creds = require('../typeform_secret.json');




module.exports = {
	getForm: function() {
		request
		.get(config["sources"]["typeform"]+'/'+creds["form"]+'&key='+creds['api_key'])
		.end(function(err, res) {
			if (err) console.error(err);
			console.log(res);
		});
	}
}