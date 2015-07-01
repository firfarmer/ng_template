(function(){
	var app = angular.module('myApp', ['smart-table']);	

	app.controller('ProfileController', ['$scope', function($scope){
		$scope.title = 'Profiles';
		$scope.data = profiles;
		$scope.roles = roles;
	}]);

	var profiles = [{Id:1,Name:'Sales',Count:99},{Id:2,Name:'Finance',Count:12}];
	var roles = [{Id:1,Name:'VP North America',Count:3},{Id:2,Name:'Regional VP',Count:8},{Id:3,Name:'Account Exec',Count:32}];
})(); 	