let Backbone = require("backbone");
let App = require("../app.js");
App.Model = Backbone.Model.extend({
  idAttribute: "_id",
  urlRoot:"http://tiny-starburst.herokuapp.com/collections/Tim_week6/"
});
module.exports = App.Model;
