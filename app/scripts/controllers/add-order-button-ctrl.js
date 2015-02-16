angular.module('jstestApp')
    .controller('addOrderButtonCtrl', ['$scope', '$rootScope', '$window',
        function ($scope, $rootScope, $window) {
            'use strict';

            this.getPosition = function (meals, id) {
                var position = -1;

                angular.forEach(meals, function (item) {
                    if (Object.keys(item)[0] === id) {
                        position++;
                    }
                });
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
                    currentOrder = {},
                    indexPosition,
                    currentElement;

                currentOrder[id] = currentOrderData;

                // filter by type
                if (type === 'main') {
                    indexPosition = Object.keys(orders.main).indexOf(id);
                    // increment the meal amount if it was already added
                    if (indexPosition >= 0) {
                        currentElement = orders.main[indexPosition];
                        orders.main[currentElement].amount++;
                    } else {
                        orders.main.push(currentOrder);
                    }

                   // $rootScope.main++;
                } else {
                    indexPosition = Object.keys(orders.others).indexOf(id);
                    if (indexPosition >= 0) {
                        currentElement = orders.others[indexPosition];
                        orders.others[currentElement].position++;
                    } else {
                        orders.others.push(currentOrder);
                    }

                   // $rootScope.others++;
                }
                //update total price
                $rootScope.totalprice += Number(price);
                orders.totalprice = $rootScope.totalprice;

                // store data in sessionStorage
                $window.sessionStorage.setItem('basketData', JSON.stringify(orders));

                $rootScope.hasBasketContent = true;

            };
    }
    ]);