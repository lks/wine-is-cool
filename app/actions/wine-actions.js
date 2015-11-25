/**
 * Created by j.calabrese on 11/24/15.
 */
var AppDispatcher = require('../dispatcher/app-dispatcher.js');
var Parse = require('parse');

module.exports = {

  new: function(wineToSave) {
    Parse.initialize("3vSMreKGKmGcOV8UROdONcrvssj4DGnrs0TO3nT1", "2odQGKU9B1Lb8KeQdAeYeUDG63CZWMUVhwjpaOQg");
    var Wine = Parse.Object.extend("Wine");
    var wine = new Wine();

    wine.save(wineToSave, {
      success: function(object) {
        AppDispatcher.handleViewAction({
          actionType: "wine.new",
          wine:object
        });
      },
      error: function(model, error) {
        AppDispatcher.handleViewAction({
          actionType: "wine.new.error",
          error:error
        });
      }
    });
  },

  listAll: function() {
    Parse.initialize("3vSMreKGKmGcOV8UROdONcrvssj4DGnrs0TO3nT1", "2odQGKU9B1Lb8KeQdAeYeUDG63CZWMUVhwjpaOQg");
    var Wine = Parse.Object.extend("Wine");
    var query = new Parse.Query(Wine);
    query.find({
      success: function(results) {
        AppDispatcher.handleViewAction({
          actionType: "wine.list",
          wines:results
        });
      },
      error: function(error) {
        AppDispatcher.handleViewAction({
          actionType: "wine.list.error",
          error:error
        });
      }
    })
  },

  get: function(wineId) {

  }
};