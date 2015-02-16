'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {
	$scope.menu = {};
    MenuService.get('/data/menu.json').success(function(data) {
	  $scope.menu = data;


        $scope.getNumberOfMeals = function (meals) {
            var nmeals = 0;

            angular.forEach(meals, function (meal) {
                var key = Object.keys(meal)[0];

                nmeals += meal[key].amount;
            });

            return nmeals;
        };
	});
  }
]);
