var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		//this will put a file in the template instead of plain text or html code
		templateUrl:'12dummy.html' //dummy page not included because there is no access to XAMPP server
	})
	.when('/hellouser',{
		/*
		Angular picks up template: first instead of templateUrl, 
		so no matter what order you write them in, only template: will get picked up
		
		template:'<b>This is template, I'm da bau5 </b>',
		*/
		templateUrl:'hello.html'
	})
	.otherwise({
		redirectTo:'/'
	});

});
