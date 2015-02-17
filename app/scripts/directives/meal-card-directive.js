angular.module('jstestApp').directive('mealCard', function () {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            meal: '='
        },
        templateUrl: 'views/meal-card.html'
    };
});