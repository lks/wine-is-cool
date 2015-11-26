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
		var variety = this.refs.variety.value;

		WineActions.new({
      domain: domain,
			variety: variety,
			type: typeWine,
      number: nbBottle,
      year: year
    });
  },
  render:  function () {
    return (
			<div className="row">
				<div className="col-md-4" />
				<div className="col-md-4">
					<div className="form-group">
						<h1 className="text-center">Ajouter un vin</h1>
						<div className="row">
							<div className="col-md-12">
								<input type="text" ref="domain" className="form-control" placeholder="Domaine"></input>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<input type="text" ref="variety" className="form-control" placeholder="Cépage"></input>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<input type="text" ref="typeWine" list="type" id="formType" className="form-control" placeholder="Type"></input>
								<datalist id="type">
									<option>Rouge</option>
									<option>Blanc</option>
									<option>Rosé</option>
									<option>Champagne</option>
								</datalist>
							</div>
							<div className="col-md-6">
								<input type="number" ref="year" className="form-control"  placeholder="Année"></input>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<input type="number" ref="nbBottle" className="form-control"  placeholder="Nombre de bouteille"></input>
							</div>
						</div>
						<button type="submit" className="btn btn-success btn-lg col-md-12" onClick={this.onSubmit}>
							<Link to="/list">Ajouter votre vin</Link>
						</button>
					</div>
				</div>
				<div className="col-md-4" />
			</div>
			);
  }
});

module.exports = WineNew;