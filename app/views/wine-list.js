/**
 * Created by j.calabrese on 11/24/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var WineStore = require('../stores/wine-store');
var WineActions = require('../actions/wine-actions');

var WineItem = require('./wine-item');

var WineList = React.createClass({
  getInitialState: function () {
    return {
      wines: []
    };
  },

  componentWillMount: function () {
  },

  componentDidMount: function() {
    WineStore.addChangeListener(this._onChange);
    WineActions.listAll();
  },

  componentWillUnmount: function () {
    WineStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      wines: WineStore.list()
    });
  },

  _createList: function (wines) {
    var items = wines.map(function (wine) {
      return (
        <WineItem key={wine.objectId} wine={wine} />
      )
    });
    return items;
  },

  render: function() {
    var wines = this._createList(this.state.wines);
    return (
      <div>
				<div className="row">
					<div className="col-md-8">
						<h1>Liste de vos vins</h1>
					</div>
					<div className="col-md-4">
						<a href="#/new">Ajouter un vin</a>
					</div>
				</div>

				<table className="table">
          <thead>
            <tr>
              <th>Domain</th>
							<th>Variety</th>
							<th>Year</th>
              <th>Type</th>
              <th>Bottles</th>
            </tr>
          </thead>
          <tbody>
            {wines}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = WineList;