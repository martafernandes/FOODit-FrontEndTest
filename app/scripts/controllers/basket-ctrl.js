angular.module('jstestApp')
    .controller('basketCtrl', ['$scope', '$rootScope', '$window',
        function ($scope, $rootScope, $window) {
            'use strict';

            $rootScope.hideFullBasket = true;

            this.getMealInfo = function (meals) {
                var mealsInfo = [];
                angular.forEach(meals, function (meal) {
                    var key = Object.keys(meal)[0];
                    mealsInfo.push(meal[key]);
                });

                return mealsInfo;
            };

            this.resetData = function() {
                // clear data from rootscope
                $rootScope.hideFullBasket = true;
                $rootScope.hasBasketContent = false;
                $rootScope.totalprice = 0;
                $rootScope.main = [];
                $rootScope.others = [];

                //clear data from sessionStorage
                $window.sessionStorage.removeItem('basketData');
            };
        }
    ]);