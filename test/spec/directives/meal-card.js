//describe('Directive: Meal card ', function () {
//    'use strict';
//
//    var element;
//    var compile;
//    var rootScope;
//    var scope;
//    var isolateScope;
//    var meal = {
//        id: 'id1',
//        price: 12,
//        primaryImageUrl: 'url',
//        name: 'name',
//        description: 'description',
//        tags : ['tag1', 'tag2']
//    };
//
//
//    function createElement() {
//        return angular.element('<meal-card meal="meal"></meal-card>');
//    }
//
//    beforeEach(function () {
//        module('jstestApp');
//        inject(['$compile', '$rootScope', function (_compile, _rootScope) {
//            compile = _compile;
//            rootScope = _rootScope;
//            scope = rootScope.$new();
//        }]);
//    });
//
//    it('should create the directive with meal data', function () {
//        element = compile(createElement())(scope);
//
//        scope.$digest();
//
//        isolateScope = element.isolateScope();
//
//        expect(angular.element(element[0].querySelectorAll('.price')[0]).text()).toBe('£12');
//    });
//});
