var React = require('react');
var $     = require('jquery');
var ReactDOM  = require('react-dom');
var SourceStore = require('../stores/SourceStore');
var SourceActions = require('../actions/SourceActions');
var Reflux = require('reflux');

var Sources = React.createClass({

  mixins: [Reflux.connect(SourceStore, 'sources')],

  componentDidMount: function() {
    console.log('source component rendered');
    SourceActions.fetch();
  },

	render: function() {
		return (
        <div>
        <h2>Data Sources</h2>
          <ul>
          { this.state.sources.map(function(source) {
            return (
              <dl>
                <dt>{source.api_key}</dt>
                <dd>{source.form}</dd>
              </dl>
            );
          })};  
          </ul>
        </div>
			
		); 
	}
});



module.exports = Sources;