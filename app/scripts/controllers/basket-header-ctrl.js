angular.module('jstestApp')
    .controller('basketHeaderCtrl', ['$scope', '$rootScope', '$window',
        function ($scope, $rootScope,$window) {
            'use strict';

            var sessionStorageData = JSON.parse($window.sessionStorage.getItem('basketData'));
            if (sessionStorageData) {
                $rootScope.hasBasketContent = true;
                $rootScope.main = sessionStorageData.main;
                $rootScope.others = sessionStorageData.others;
                $rootScope.totalprice = sessionStorageData.totalprice;
            } else {
                $rootScope.hasBasketContent = false;
                $rootScope.main = [];
                $rootScope.others = [];
                $rootScope.totalprice = 0;
            }

            this.openFullBasket = function () {
                $rootScope.hideFullBasket = false;
            };
    }
    ]);