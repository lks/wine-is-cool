/**
 * Created by j.calabrese on 11/24/15.
 */
var AppDispatcher  = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var wines = [];

var WineStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  list: function () {
    return wines;
  },

  removeWine: function (wine) {
    var items = wines.filter(function (itm) {
      return wine.objectId != itm.objectId;
    });
    wines = items;
  }
});

AppDispatcher.register(function(payload) {
  switch(payload.action.actionType) {
    case "wine.new":
      wines.push(payload.action.wine);
      break;
    case "wine.list":
      wines = payload.action.wines;
      break;
    default:
  }
  WineStore.emitChange();

});

module.exports = WineStore;