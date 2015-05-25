define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'view/master'
], function($, _, Backbone, Router, MasterView){
  var initialize = function(){
    // Render the home page
    var masterView = new MasterView();
    masterView.render();
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});