//describe('Controller: basketHeaderCtrl', function () {
//    'use strict';
//
//    // load the controller's module
//    beforeEach(module('jstestApp'));
//
//    var basketHeaderCtrl,
//        scope,
//        session= {
//            'basketData': null
//        },
//        window;


    // Initialize the controller and a mock scope
//    beforeEach(inject(function ($controller, $rootScope, $window) {
//        scope = $rootScope.$new();
//        window = $window;
//
//        Object.defineProperty(window.sessionStorage, 'setItem', { writable: true });
//        Object.defineProperty(window.sessionStorage, 'getItem', { writable: false });
//
//        spyOn(window.sessionStorage, 'getItem').andCallFake(function(key) {
//            return session[key];
//        });
//        spyOn($window.sessionStorage, 'setItem').andCallFake(function(key, value) {
//            session[key] = value;
//        });
//
//        basketHeaderCtrl = $controller('basketHeaderCtrl', {
//            $scope: scope
//        });
//    }));
//});