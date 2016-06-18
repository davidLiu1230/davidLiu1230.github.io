// The master view
define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin
  'text!template/master.html',
  'css!compiled/css/master.css'
], function($, _, Backbone, MasterTemplate){

  var MasterView = Backbone.View.extend({
    el: $('#container'),
    render: function(){

      var template = _.template(MasterTemplate);
      // Assign template to this Views "el"
      this.$el.html(template);
    }
  });

  // Our module now returns our view
  return MasterView;
});