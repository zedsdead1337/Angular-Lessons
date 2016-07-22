var app=angular.module('mainApp',[]);

app.controller('people',function ($scope,$http) {
	//notice we are passing $http, just like everything we need we pass it to the function
	$http.get(15database.json); //will make a GET request to this URL
	.success(function(response){ //if request is success
		$scope.persons=response.records; //injecting scope.persons with response.records
	});
});