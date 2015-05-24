// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'view/master',
], function($, _, Backbone, MasterView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    $('#content').html('<h2>Hello World!</h2>');
    var app_router = new AppRouter;
    console.log('Inside router.initialize');
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});