  
    //console.log("SECTION", SECTION);
    var HirealchemyHcl = angular.module('HirealchemyHcl', ["highcharts-ng", "ngRoute"]);

	HirealchemyHcl.config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      $interpolateProvider.endSymbol(']}');
    }]);

	
    HirealchemyHcl.config(['$routeProvider', function($routeProvider, SECTION) {
    	var SECTION = 'home';
	    $routeProvider.
	      when('/', {
	        templateUrl: '/'+SECTION+'/index.html',
	        controller: 'SummaryController'
	      }).
	      when('/messages', {
	        templateUrl: '/'+SECTION+'/messages.html',
	        controller: 'SummaryController'
	      }).
	      when('/timeseries', {
	        templateUrl: '/'+SECTION+'/timeseries',
	        controller: 'TimeseriesController'
	      }).
	      when('/phones', {
	        templateUrl: 'partials/phone-list.html',
	        controller: 'PhoneListCtrl'
	      }).
	      when('/phones/:phoneId', {
	        templateUrl: 'partials/phone-detail.html',
	        controller: 'PhoneDetailCtrl'
	      }).
	      otherwise({        
	        redirectTo: '/'
	      });
  	}]);

    
