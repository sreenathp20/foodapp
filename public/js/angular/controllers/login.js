var DoAnalyticsLogin = angular.module('DoAnalyticsLogin', []);
            DoAnalyticsLogin.controller('LoginController', function ($scope, $http) {
		$scope.checkLogin = function() {
		    //console.log($scope.getCookie('login'));
		    var login = $scope.getCookie('login');
		    if(login != null) {
			window.location.href = '/home.html';
		    }
		}
		$scope.getCookie = function(name) {
		    var dc = document.cookie;
		    var prefix = name + "=";
		    var begin = dc.indexOf("; " + prefix);
		    if (begin == -1) {
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		    }
		    else
		    {
			begin += 2;
			var end = document.cookie.indexOf(";", begin);
			if (end == -1) {
			end = dc.length;
			}
		    }
		    return unescape(dc.substring(begin + prefix.length, end));
		} 
                $scope.Login = function() {
                    //console.log($scope.username);
                    //console.log($scope.password);
                    var params = {
                        "user": $scope.username,
                        "password": $scope.password
                      };
                    
                    $http({
                        url: '/login',
                        method: 'POST',
                        data: params}).success(function(data) {
                        //console.log("data", data);                
                        if (data.result) {
                            $scope.loginerror = "success!";
                            window.location.href = "/home.html";
                        } else {
                            $scope.loginerror = "Incorrect username or password!";
                        }
                    }).error(function(data) {
                        $scope.loginerror = "Error in server!";
                    });
                }
            });
