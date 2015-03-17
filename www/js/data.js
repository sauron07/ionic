services.factory('MenuItem', ['$q', '$http', function($q, $http){
	var service = {};
	var deffered = $q.defer();
	var promice = deffered.promice;
	var items = [];

		// $http.get('json/menu.json')
		// .success(function(responce){
		// 	items = responce;
		// 	deffered.rsolve();
		// })
		// .error(function(){
		// 	deffered.reject()
		// })

	service.menuItems = function(){
		$http.get('json/menu.json')
			.success(function(responce){
				return 'responce';
			})
			.error(function(){
			})
	}

	return service;
}])