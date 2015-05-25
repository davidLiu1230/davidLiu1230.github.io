// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: 'vendor/jquery-1.11.3.min',
    underscore: 'vendor/underscore-1.8.3.min',
    backbone: 'vendor/backbone-1.2.0.min'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  console.log('Initializing App');
  App.initialize();
});