'use strict';


function Config ($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/items");

        $stateProvider
            .state('dashboard', {
                url: '/items',
                component: 'viewDashboard',
                resolve: {
                    items: [ 'itemsStoreService', (itemStoreService) => {return itemStoreService.getItems()}]
                }
            })
            .state('details', {
                url: '/items/:itemId',
                component: 'viewDetails',
                resolve: {
                    item: ['$stateParams', 'itemsStoreService', ($stateParams,itemStoreService) => {return itemStoreService.getItem($stateParams.itemId)}]
                }
            });


    }

Config.$inject = ['$stateProvider', '$urlRouterProvider'];


export default Config;