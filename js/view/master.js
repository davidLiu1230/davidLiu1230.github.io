// The master view
define([
  'jquery',
  'underscore',
  'backbone',
  'jqueryRipples',
  // Using the Require.js text! plugin
  'text!template/master.html',
  'css!compiled/css/master.css'
], function($, _, Backbone, Ripples, MasterTemplate){

  var MasterView = Backbone.View.extend({
    el: $('.wrapper'),
    render: function(){

      var template = _.template(MasterTemplate);
      // Assign template to this Views "el"
      this.$el.html(template);
      // Turn on the ripple effect
      $('body').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
    }
  });

  // Our module now returns our view
  return MasterView;
});