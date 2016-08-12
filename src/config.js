'use strict';


function Config ($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/items");

        $stateProvider
            .state('items', {
                url: '/items',
                component: 'dashboard',
                resolve: {
                    items: [ 'itemStoreService', (itemStoreService) => {return itemStoreService.getItems()}]
                }
            })
            .state('details', {
                url: '/items/:itemId',
                component: 'itemDetail',
                resolve: {
                    item: ['$stateParams', 'itemStoreService', ($stateParams,itemStoreService) => {return itemStoreService.getItem($stateParams.itemId)}]
                }
            });


    }

Config.$inject = ['$stateProvider', '$urlRouterProvider'];


export default Config;