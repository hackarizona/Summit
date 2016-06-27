var React = require('react');
var ReactDOM =  require('react-dom');

var Sources = require('./components/Sources.react.js');
var SourceForm = require('./components/SourceForm.react.js');

var FieldPicker = require('./components/FieldPicker.react.js');
var DataTable = require('./components/DataTable.react.js');

var App = React.createClass({
	render: function() {
		return (
	<div className="units-row units-padding">
		<div className="unit-100">
			<DataTable />
		</div>
	</div>

			
		); 
	}
});

ReactDOM.render(<App />, document.getElementById('app'));