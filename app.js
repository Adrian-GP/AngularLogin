var app = angular.module("myApp", ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

	$mdThemingProvider.theme('myApp')
	.primaryPalette('red')
    .accentPalette('blue');
	$mdThemingProvider.setDefaultTheme('myApp');

	$urlRouterProvider.otherwise('login');

	$stateProvider
	.state('login', {
		url:'/login',
		templateUrl: 'states/login/login.view.html',
		controller: 'loginController'
	})
	.state('about', {
		url:'/about',
		template: '<h3>Esto es un intento de un login :v</h3>'
	});
  
});