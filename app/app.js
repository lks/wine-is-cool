/**
 * Created by j.calabrese on 11/8/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var WineNew = require('./views/wine-new');
var WineList = require('./views/wine-list');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/new">New</Link>
        <Link to="/list">List</Link>
        <div>
        {this.props.children}
        </div>
      </div>
    )
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="new" component={WineNew} />
      <Route path="list" component={WineList} />
    </Route>
  </Router>
), document.getElementById('app'));