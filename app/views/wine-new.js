var React = require('react');
var ReactDOM = require('react-dom');
var WineActions = require('../actions/wine-actions');

var Link = require('react-router').Link;

var WineNew = React.createClass({
  onSubmit: function (e) {

    var domain = this.refs.domain.value;
    var typeWine = this.refs.typeWine.value;
    var nbBottle = this.refs.nbBottle.value;
    var year = this.refs.year.value;

    WineActions.new({
      domain: domain,
      type: typeWine,
      number: nbBottle,
      year: year
    });
  },
  render:  function () {
    return (
      <div className="form-group">
        <h1>Ajouter un vin à votre cave</h1>
        <div className="row">
          <input type="text" ref="domain" className="form-control" id="formDomain" placeholder="domain"></input>
        </div>
        <div className="row">
          <input type="text" ref="typeWine" list="type" id="formType" className="form-control" placeholder="Type"></input>
          <datalist id="type">
            <option>Rouge</option>
            <option>Blanc</option>
            <option>Rosé</option>
            <option>Champagne</option>
          </datalist>
        </div>
        <div className="row">
          <input type="number" ref="year" className="form-control"  placeholder="Année"></input>
        </div>
        <div className="row">
          <input type="number" ref="nbBottle" className="form-control"  placeholder="Nombre de bouteille"></input>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.onSubmit}><Link to="/list">Submit</Link></button>
      </div>
    );
  }
});

module.exports = WineNew;