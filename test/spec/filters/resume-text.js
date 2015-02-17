describe('Filter:: resumeText', function () {
    'use strict';

    var resumeText;

    beforeEach(module('jstestApp'));

    beforeEach(inject(function ($filter) {
        resumeText = $filter('resumeText');
    }));


    it('Get the first sentence of a text', function () {
        expect(resumeText('Random text. More random text', '.')).toBe('Random text.');
        expect(resumeText('Random text,', '.')).toBe('Random text,');
    });
});