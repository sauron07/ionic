services.factory('rest', ['$http', function($http){
	return {
		path: undefined,

		json: function(){
			return $http.get(this.path);
		}
	};
}])
