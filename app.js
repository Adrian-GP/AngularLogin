var app = angular.module("myApp", ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('login');

	$stateProvider
	.state('login', {
		url:'/login',
		templateUrl: 'states/login/login.view.html',
		controller: 'loginController'
	})
	.state('about', {
		url:'/about',
		template: '<h3>Esto es un intento de calculadora :v!</h3>'
	})
  
});