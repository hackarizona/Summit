var React = require('react');
var ReactDOM = require('react-dom');
var FormActions = require('../actions/FormActions.js');
var FormStore = require('../stores/FormStore');

var api = require('../shared/api')
var Reflux = require('reflux');

var FieldPicker = React.createClass({

    mixins: [Reflux.connect(FormStore, 'questions')],

    componentDidMount: function() {
      console.log('form component rendered');
      FormActions.fetch();
    },

    render: function() {
      return (
        <div>
        <ul>
          {this.state.questions.map(function(question) {
            return <li>{question.question}</li>;
          })}
        </ul>
        </div>
      );
    }
});

module.exports = FieldPicker;