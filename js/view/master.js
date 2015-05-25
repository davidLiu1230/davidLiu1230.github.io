// The master view
define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!../template/master.html'
], function($, _, Backbone, MasterTemplate){

  var MasterView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      console.log('Inside view.render()');
      // Using Underscore we can compile our template with data
      var compiledTemplate = _.template(MasterTemplate);
      console.log(compiledTemplate);
      // Append our compiled template to this Views "el"
      this.$el.find('#content').append(compiledTemplate);
    }
  });

  // Our module now returns our view
  return MasterView;
});