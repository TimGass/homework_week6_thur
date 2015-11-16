let Backbone = require("backbone");
let App = require("../app.js");
let $ = require("jquery");
let _ = require("lodash");

App.View = Backbone.View.extend({
  initialize: function(options){
    this.collection = options.collection;
    this.collection.on("change", this.render());
  },
  events: {
    "keydown #addItem" : "enterHandler"
  },
  template: _.template($("#itemTemplate").html()),
  render: function(){
    this.$el.html(this.template({ list : this.collection, $ : $, Backbone: Backbone}));
    return this;
  },
  enterHandler: (event) => { if(event.Keycode === 13){ post(); }},
  post: () => {
    App.model.save({"TODO" : $("#addItem").val()});
  }
});

module.exports = App.View;
