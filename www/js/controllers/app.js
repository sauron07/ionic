controllers.controller('AppCtrl', [
	'$scope',
	'$ionicSideMenuDelegate',
	'rest',
	function($scope, $ionicSideMenuDelegate, rest){
		$scope.toggleLeft = function(){
			$ionicSideMenuDelegate.toggleLeft();
			console.log('open menu');
		}
		rest.path = 'json/menu.json';
		rest.json().success(function(responce){
			console.log('enter');
			$scope.items = responce;
		});
}]);