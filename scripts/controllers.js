(function() {
	var app = angular.module("myApp");
	app.controller("MainCtrl", ["$scope", "$location", function($scope, $location) {	
		$scope.navigate = function() {
			$location.path("/customers");
		};
	}]);
	app.controller("OrdersCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {
		$scope.title = "Orders " + $routeParams.id;
	}]);
})();