angular.module('jstestApp').directive('mealCard', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: false,
        scope: {
            meal: '='
        },
        templateUrl: 'views/meal-card.html'
    };
});