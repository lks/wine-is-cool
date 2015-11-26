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
				<WineNew />
				<div className="row">
					<div className="col-md-4" />
					<div className="col-md-4 text-center">
						<hr />
					OU
						<hr />
						<button type="submit" className="btn btn-default btn-lg col-md-12">
							<Link to="/list">Accéder à ma cave</Link>
						</button>
					</div>
					<div className="col-md-4" />
				</div>
			</div>
    )
  }
});

ReactDOM.render((
  <Router>
		<Route path="/" component={App} />
		<Route path="new" component={WineNew} />
		<Route path="list" component={WineList} />
  </Router>
), document.getElementById('app'));