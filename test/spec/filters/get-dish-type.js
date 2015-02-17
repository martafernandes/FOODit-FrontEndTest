describe('Filter:: getDishType', function () {
    'use strict';

    var getDishType;

    beforeEach(module('jstestApp'));

    beforeEach(inject(function ($filter) {
        getDishType = $filter('getDishType');
    }));


    it('Get the dish type based on tags list', function () {

        expect(getDishType(['#main_courses', 'other_tag'])).toBe('main');
        expect(getDishType(['some_tag', 'another_tag'])).toBe('other');
    });
});
