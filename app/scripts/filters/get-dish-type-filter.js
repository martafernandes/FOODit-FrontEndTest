angular.module('jstestApp').filter('getDishType', function () {
    'use strict';

    return function (tags) {
        var foundType = false,
            dishType = 'other';

        angular.forEach(tags, function (tag) {
            if (tag.indexOf('main_courses') >= 0 && !foundType) {
                foundType = true;
                dishType = 'main';
            }
        });

        return dishType;
    };
});