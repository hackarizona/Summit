var Reflux = require ('reflux');
var React = require('react');
var FormActions = require('../actions/FormActions');
var api = require('../shared/api.js');


var FormStore = Reflux.createStore({

	listenables: [FormActions],

	init: function() {
		this.formData = [];
		this.listenTo(FormActions.fetch, this.fetch);
		console.log("source store init");

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
			var data = resp.body.questions;
			this.formData = data;
			console.log("data");
			console.log(data);
			this.trigger(this.formData);
			FormActions.sendResponses(resp.body.response)
		}.bind(this));

	}
});

module.exports = FormStore;