var app = angular.module("myApp", []);
app.controller("MyController", function($scope) {
	$scope.clock = {
		now: new Date()
	};
	var updateClock = function($scope) {
		$scope.clock.now = new Date();
	};
	setInterval(function() {
		$scope.$apply(updateClock);
		// updateClock();
	}, 1000);
	updateClock();
});