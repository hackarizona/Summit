var React = require('react');
var ReactDOM =  require('react-dom');

var Sources = require('./components/Sources.react.js');
var SourceForm = require('./components/SourceForm.react.js');



var App = React.createClass({
	render: function() {
		return (
	<div className="units-row units-padding">
		<div className="unit-50">
			<SourceForm />
		</div>
		<div className="unit-50">
			<Sources />
		</div>
	</div>

			
		); 
	}
});

ReactDOM.render(<App />, document.getElementById('app'));