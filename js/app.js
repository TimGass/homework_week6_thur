let App = {Collection:{}, Model:{}, View:{}};
let Backbone = require("backbone");
let $ = require("jquery");
App.Collection = require("./Collections/Collection.js");
App.Model = require("./Models/Model.js");
App.View = require("./Views/View.js");
App.collection = new App.Collection();
App.model = new App.Model();
App.collection.fetch().done(function(){
  App.view = new App.View({collection : App.collection});
  $("main").append(App.view.render().$el);
  App.view.collection.on("change", App.view.render());
});
module.exports = App;
