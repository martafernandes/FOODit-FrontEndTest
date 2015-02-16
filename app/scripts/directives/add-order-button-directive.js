angular.module('jstestApp').directive('addOrderButton', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: false,
        scope: {
           id: '@',
           type: '@',
           name: '@',
           price: '@'
        },
        controller: 'addOrderButtonCtrl',
        controllerAs: 'addOrderButtonCtrl',
        templateUrl: 'views/add-order-button.html',
        link: function ($scope, element, a, ctrl) {
            /*jshint unused: true */

            $scope.click = function (event) {

                event.preventDefault();
                event.stopPropagation();

                ctrl.addItemtoBasket($scope.id, $scope.price, $scope.name, $scope.type);
            };
        }
    };
});