// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var controllers = angular.module('controllers', []);
var services = angular.module('services', []);

var app = angular.module('app', [
  'ionic',
  'ui.router',  
  'services',
  'controllers',
  ]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('app');

    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl',
        })
        .state('app.home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .state('app.about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl'
        })
}])