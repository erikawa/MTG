angular.module('mtg').controller('MtgSearchController', function($scope, $http) {

	$scope.card = 'teste';
	$scope.filtro = '';
	$scope.cardName = '';

	$scope.submit = function() {
		console.log('Submetido: ' + $scope.cardName);
		if($scope.cardName) {
			var response = $http.get('https://api.magicthegathering.io/v1/cards?name=' + $scope.cardName);
			response.then(function(cardInfo){
				$scope.card = cardInfo.data;
			}).catch(function(error) {
				console.log(error);
			});
		}
	};
});