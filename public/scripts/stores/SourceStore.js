var Reflux = require ('reflux');
var React = require('react');
var SourceActions = require('../actions/SourceActions');
var api = require('../shared/api.js');


var SourceStore = Reflux.createStore({

	listenables: [SourceActions],

	init: function() {
		this.sources = [];
		this.listenTo(SourceActions.fetch, this.fetch);
		console.log("source store init");

	},

	onSubmit: function(data) {
		console.log(api.createSource(data));
	},

	getInitialState: function() {
		this.sources = [];
		return this.sources;

	},

	fetch: function() {
		api.getConnections(function(err, resp) {
		if (err) throw err;
			var data = resp.body;
			console.log(resp.body);
			this.sources = data;
			console.log("data");
			console.log(data);
			this.trigger(this.sources);
		}.bind(this));

	}
});

module.exports = SourceStore;