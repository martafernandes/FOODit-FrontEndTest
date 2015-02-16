angular.module('jstestApp')
    .controller('addOrderButtonCtrl', ['$scope', '$rootScope', '$window',
        function ($scope, $rootScope, $window) {
            'use strict';

            this.updateMealInfo = function (meals, id, currentOrder) {
                var idExists = false;

                angular.forEach(meals, function (item) {
                    var key =  Object.keys(item)[0];

                    // updates the amount if the order is already added to the basket
                    if (key === id && !idExists) {
                        item[key].amount++;
                        idExists = true;
                    }
                });

                // if it's a new order
                if (!idExists) {
                    meals.push(currentOrder);
                }
            };

            this.addItemtoBasket = function (id, price, name, type) {
                var orders = {
                        main: $rootScope.main,
                        others: $rootScope.others
                    },
                    currentOrderData = {
                        price: price,
                        name: name,
                        type: type,
                        amount: 1
                    },
                    currentOrder = {};

                currentOrder[id] = currentOrderData;

                // filter by type
                if (type === 'main') {
                    this.updateMealInfo(orders.main, id, currentOrder);
                } else {
                    this.updateMealInfo(orders.others, id, currentOrder);
                }
                //update total price
                $rootScope.totalprice += Number(price);
                orders.totalprice = $rootScope.totalprice;

                // store data in sessionStorage and update rootscope
                $window.sessionStorage.setItem('basketData', JSON.stringify(orders));
                $rootScope.main = orders.main;
                $rootScope.others = orders.others;

                $rootScope.hasBasketContent = true;

            };
    }
    ]);