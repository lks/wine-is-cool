/**
 * Created by j.calabrese on 11/8/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');

var InitScreen = React.createClass({
  onSubmit: function (e) {
    Parse.initialize("3vSMreKGKmGcOV8UROdONcrvssj4DGnrs0TO3nT1", "2odQGKU9B1Lb8KeQdAeYeUDG63CZWMUVhwjpaOQg");
    var Wine = Parse.Object.extend("Wine");
    var wine = new Wine();
    var domain = this.refs.domain.value;
    var typeWine = this.refs.typeWine.value;
    var nbBottle = this.refs.nbBottle.value;
    var year = this.refs.year.value;

    wine.save({
      domain: domain,
      type: typeWine,
      number: nbBottle,
      year: year}, {
      success: function(object) {
        alert("Wine created" + object.id);
      },
      error: function(model, error) {
        alert("An error occured");
      }
    });
  },
  render: function() {
    return (
      <div>
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
        <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
});

ReactDOM.render(<InitScreen />, document.getElementById('app'));