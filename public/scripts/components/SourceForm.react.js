var React = require('react');
var ReactDOM = require('react-dom');
var SourceActions = require('../actions/SourceActions.js');


var SourceForm = React.createClass({

    handleSubmit: function(event) {
      event.preventDefault();
      console.log('submit!');
      var data = {};
      data["api_key"] = ReactDOM.findDOMNode(this.refs.api_key).value;
      data["form_id"] = ReactDOM.findDOMNode(this.refs.form_id).value;
      
      SourceActions.submit(data)
    },

    render: function() {
        return (
        <form onSubmit={this.handleSubmit} method="post" action="" className="forms">
        <fieldset>
          <legend>New Source</legend>
            <label>
            Api Key
            <input type="text" ref="api_key" name="api_key" className="width-50" />
            </label>
            <label>
            Form ID
            <input type="text" ref="form_id" name="form_id" className="width-50" />
            </label>
        <p>
            <button className="btn btn-blue">Submit</button>
        </p>
        </fieldset>
        </form>
        )
    }
});

module.exports = SourceForm;