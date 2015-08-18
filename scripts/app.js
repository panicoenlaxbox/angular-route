(function() {
	var app = angular.module("myApp", ["ngRoute"]);
	app.config(["$routeProvider", function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "views/home.html"
			})
			.when("/customers", {
				templateUrl: "customers.html" //id de script con type="text/ng-template"
			})
			.when("/orders/:id", {
				templateUrl: "views/orders.html"
			})
			.when("/settings", {
				templateUrl: "views/settings.html",
				controller: ["$scope", function($scope) {
					$scope.title="My settings";
				}]
			})									
			.otherwise({
				redirectTo: "/"
			});
	}]);
})();