angular.module('jstestApp').filter('resumeText', function () {
    'use strict';

    return function (item, limitChar) {
        var limitIndex = item.indexOf(limitChar),
            resumedText;

        if (limitIndex === -1) {
            resumedText = item;

        } else {
            resumedText = item.substring(0, limitIndex + 1);
        }

        return resumedText;
    };
});