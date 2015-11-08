/**
 * Created by j.calabrese on 11/8/15.
 */
var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
      </div>
    )
  }
});

React.render(<Main />, document.getElementById('app'));