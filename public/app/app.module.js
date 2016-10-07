angular
  .module('app', ['ui.router', 'ngMaterial', 'ngSanitize', 'angular-bind-html-compile'])
  .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('catalogue', {
        url: '/',
        templateUrl: './app/components/catalog/catalogView.html',
        controller: 'catalogCtrl'
      });
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: './app/components/admin/adminView.html',
        controller: 'adminCtrl'
      });
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: './app/components/create/createView.html',
        controller: 'createCtrl'
      });
    $stateProvider
      .state('item', {
        url: '/item/:id',
        templateUrl: './app/components/item/itemView.html',
        controller: 'itemCtrl'
      });
  }])

// create the controller and inject Angular's $scope
// app.controller('mainController', function($scope) {

    // create a message to display in our view
    // $scope.msg = 'Everyone come and see how good I look!';
// });

/*app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('catalogue', {
        url: '/',
        templateUrl: 'components/catalogue/catalogueView.html',
        controller: 'signup-controller'
    });/*
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'login-controller'
    });
    $stateProvider.state('getkey', {
        url: '/getkey',
        templateUrl: 'partials/getkey.html',
        controller: 'getkey-controller'
    });

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partials/landing.html',
        controller: 'home-controller'
    });
    $stateProvider.state('invalidkey', {
        url: '/invalidkey/',
        templateUrl: 'partials/enterkey.html',
        controller: 'invalid-key-controller'
    });
    $stateProvider.state('enterkey', {
        url: '/enterkey',
        templateUrl: 'partials/enterkey.html',
        controller: 'enter-key-page-controller'
    });
});*/
