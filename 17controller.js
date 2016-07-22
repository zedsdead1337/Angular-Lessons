var fileX = {
		"records":[
		{
			"Name":"Lakshay",
			"Age":"22",
			"Fav_color":"Red"
		},
		{
			"Name":"Piyush",
			"Age":"22",
			"Fav_color":"Orange"
		},
		{
			"Name":"Kalia",
			"Age":"12",
			"Fav_color":"Pink"
		},
		{
			"Name":"Anonymous",
			"Age":"???",
			"Fav_color":"??"
		}
		]

	}

//hard coding the JSON object in the controller itself
var app=angular.module('mainApp',[]);


app.controller('people',function ($scope) {
	$scope.persons=fileX.records;
});
