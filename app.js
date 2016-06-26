var express = require('express');
var authController = require('./controllers/auth');
var setupController = require('./controllers/setup')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

var Connection = require('./models/connection')

mongoose.connect('mongodb://localhost:27017/summit');

var app = express();
var router = express.Router();

var successFunc = function() {return "success";}

app.use("/", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(passport.initialize());

app.route('/')
	.get(function(req, res) {
		res.sendFile('/index.html')
	});

app.route('/setup/typeform')
	.get(setupController.newSource)
	.post(setupController.createSource)


app.route('/sources')
	.get(function(request, response) {
		var connections = Connection.find({}, function(err, connections) {
			response.send(connections);
		});
		
	})
	.post(function(request, response) {
		var connection = new Connection();
		connection.api_key = request.body.api_key;
		connection.form = request.body.form;

		connection.save(function(err) {
			if (err) response.send(err);
			response.json({message: 'Connection created successfully!', data: connection });
		});
	});


app.listen(3000, function() {
	console.log("Summit listening on port 3000");
});
