var app= angular.module('mainApp',[]);
app.controller('app',function($scope){
	$scope.counter=0;
	$scope.$watch('myText',function(newValue,oldValue){
		console.log("New Value: " + newValue);
		console.log("Old Value: " +oldValue);
		$scope.counter++;
	});

});