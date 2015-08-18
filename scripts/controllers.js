(function() {
	var app = angular.module("myApp");
	app.controller("MainCtrl", ["$scope", function($scope) {
		
	}]);
	app.controller("OrdersCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {
		$scope.title = "Orders " + $routeParams.id;
	}]);
})();