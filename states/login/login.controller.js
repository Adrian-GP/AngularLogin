angular.module('myApp').controller('loginController', function($scope){


	$scope.updateValue = function(){
		$scope.sum=0;
		$scope.sum = $scope.first + $scope.second;
		$scope.calculation = $scope.first + ' + '+ $scope.second + '=' + $scope.sum;
	}
	
});