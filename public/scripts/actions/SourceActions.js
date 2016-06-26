'use strict';

var Reflux = require('reflux');

var SourceActions = Reflux.createActions([
	'fetch',
	'submit',
	'update'
]);

module.exports = SourceActions;