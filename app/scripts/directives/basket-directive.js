angular.module('jstestApp').directive('basket', function ($rootScope) {
    'use strict';
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'views/basket.html',
        controller: 'basketCtrl',
        controllerAs: 'basketCtrl',
        link: function ($scope, element, a, ctrl) {
            /*jshint unused: true */

            $scope.confirm = function (event) {
                event.preventDefault();
                event.stopPropagation();

                ctrl.resetData();
            };

            $scope.hideBasket = function (event) {
                event.preventDefault();
                event.stopPropagation();

                $rootScope.hideFullBasket = true;
            };
        }
    };
});