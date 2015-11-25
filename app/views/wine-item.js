/**
 * Created by j.calabrese on 11/25/15.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var WineItem = React.createClass({
  getDefaultProps: function() {
    return { wine: {}};
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.wine.get('domain')}</td>
        <td>{this.props.wine.get('year')}</td>
        <td>{this.props.wine.get('type')}</td>
        <td>{this.props.wine.get('number')}</td>
      </tr>
    );
  }
});

module.exports = WineItem;
