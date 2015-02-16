angular.module('jstestApp').directive('basketItem', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: false,
        scope: {
            name: '@',
            price: '@',
            amount: '@'
        },
        templateUrl: 'views/basket-item.html'
    };
});