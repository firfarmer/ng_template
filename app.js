(function(){
	var app = angular.module('myApp', ['smart-table']);	

	app.controller('ProfileController', ['$scope', function($scope){
		$scope.title = 'Profiles';
		$scope.data = profiles;
	}]);

	var profiles = [{Id:1,Name:'Profile1',Count:99},{Id:2,Name:'Profile2',Count:12}];
})(); 	