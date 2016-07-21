var app= angular.module('mainApp',['ng-Route']);
app.config('$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		template:'Welcome user!'
	})
	.when('/anotherPage',{
		template:'Welcome user, again!'
	})
	.otherwise({
		redirectTo:'/'
	})
});