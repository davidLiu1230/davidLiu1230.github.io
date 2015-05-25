// Require.js allows us to configure shortcut alias
require.config({
  // This is to resolve the issue where it looks like
  //relative path is not available in requireJS text plug-in
  baseUrl: "../",
  paths: {
    jquery: 'js/vendor/jquery-1.11.3.min',
    underscore: 'js/vendor/underscore-1.8.3.min',
    backbone: 'js/vendor/backbone-1.2.0.min'
  }

});

require([

  // Load our app module and pass it to our definition function
  'js/app',
], function(App){
  // The "app" dependency is passed in as "App"
  console.log('Initializing App');
  App.initialize();
});