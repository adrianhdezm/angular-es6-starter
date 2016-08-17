'use strict';

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config ($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/items");

        $stateProvider
            .state('dashboard', {
                url: '/items',
                component: 'viewDashboard',
                resolve: {
                    items: resolveItems
                }
            })
            .state('details', {
                url: '/items/:itemId',
                component: 'viewDetails',
                resolve: {
                    item: resolveItem
                }
            })
            .state('edit', {
                url: '/items/:itemId/edit',
                component: 'viewEdit',
                resolve: {
                    item: resolveItem
                }
            });

    }


resolveItems.$inject = ['itemsStoreService'];
function resolveItems(itemStoreService)  {
    return itemStoreService.getItems();
}


resolveItem.$inject = ['$stateParams', 'itemsStoreService'];
function resolveItem($stateParams,itemStoreService)  {
    return itemStoreService.getItem($stateParams.itemId);
}



export default config;