angular.module('mtg').controller('MtgSearchController', function($scope, $http) {

	$scope.cards = {};
	$scope.filtro = '';

	var response = $http.get('https://api.magicthegathering.io/v1/cards');
	response.then(function(cardInfo){
		$scope.cards = cardInfo.data;
	}).catch(function(error) {
		console.log(error);
	});
});