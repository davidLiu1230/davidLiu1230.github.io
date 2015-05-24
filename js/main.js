// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'vendor/jquery-1.11.3.min.js',
    underscore: 'vendor/underscore-1.8.3.min.js',
    backbone: 'vendor/backbone-1.2.0.min.js'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});