var React = require('react');
var ReactDOM = require('react-dom');
var ResponseActions = require('../actions/ResponseActions.js');
var api = require('../shared/api');
var ResponseStore = require('../stores/ResponseStore.js');
var Reflux  = require('reflux');


var DataTable = React.createClass({

    mixins: [Reflux.connect(ResponseStore, 'responses')],

    componentDidMount: function() {
      console.log('form component rendered');
      ResponseActions.fetch();
    },

    render: function() {
        return (
        <table className="table-hovered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School</th>
            <th>Gender</th>
            <th>Major</th>
          </tr>
        </thead>
        <tbody>
          {this.state.responses.map(function(response) {
            return (
            <tr>
              <td>{response.answers.textfield_13632184}</td>
              <td>{response.answers.textfield_13632185}</td>
              <td>{response.answers.textfield_13632159}</td>
              <td>{response.answers.list_13632165_choice}</td>
              <td>{response.answers.textarea_13632171}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
        );
    }
});

module.exports = DataTable;


/* 

*/