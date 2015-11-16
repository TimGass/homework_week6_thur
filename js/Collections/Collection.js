let Backbone = require("backbone");
let App = require("../app.js");
App.Collection = Backbone.Collection.extend({
  url: "http://tiny-starburst.herokuapp.com/collections/Tim_week6",
  model: require("../Models/Model.js"),
});

module.exports = App.Collection;
