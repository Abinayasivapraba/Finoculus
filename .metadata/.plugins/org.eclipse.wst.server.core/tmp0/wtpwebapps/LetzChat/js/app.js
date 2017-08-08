var app = angular.module('chatApp',['ngRoute','ngCookies','firebase']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'Header/Home.html'	
	})
	.when('/goRegister', {
		templateUrl : 'User/Reg.html',
		controller : 'UserController'
	})
	.when('/login', {
		templateUrl : 'User/Login.html',
		controller : 'UserController'
	})
	.when('/chat', {
		templateUrl : 'Chat/ChatHome.html',
		controller : 'ChatController'
	})
    .when('/createGroup', {
		templateUrl : 'Group/CreateGroup.html',
		controller : 'GroupController'
	})
	.when('/viewGroup', {
		templateUrl : 'Group/ViewGroup.html',
		controller : 'GroupController'
	})
	.otherwise({
		redirectTo : '/'
			
	});
});