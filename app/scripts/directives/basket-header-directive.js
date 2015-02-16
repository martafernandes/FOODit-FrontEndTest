angular.module('jstestApp').directive('basketHeader', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'views/basket-header.html',
        controller: 'basketHeaderCtrl',
        controllerAs: 'basket',
        link: function ($scope, element, a, ctrl) {

            $scope.click = function (event) {

                event.preventDefault();
                event.stopPropagation();

                ctrl.openFullBasket();
            };
        }
    };
});