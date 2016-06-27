var Reflux = require ('reflux');
var React = require('react');
var ResponseActions = require('../actions/ResponseActions');
var api = require('../shared/api.js');


var ResponseStore = Reflux.createStore({

	listenables: [ResponseActions],

	init: function() {
		this.formData = [];
		this.listenTo(ResponseActions.fetch, this.fetch);
		console.log("response store init");

	},

	onSubmit: function(data) {
		api.createConnection(data, function(err, resp) {
		if (err) throw err;
			var data = resp.body;
			this.formData = data 

		}.bind(this));
	},

	getInitialState: function() {
		this.formData = [];
		return this.formData;

	},

	fetch: function() {
		api.getTestForm(function(err, resp) {
		if (err) throw err;
			var data = resp.body.responses;
			this.formData = data;
			console.log("data");
			console.log(data);
			this.trigger(this.formData);
		}.bind(this));

	}
});

module.exports = ResponseStore;