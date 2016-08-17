'use strict';

import template from './breadcrumbs.template.html';

class BreadcrumbsComponent {
    constructor() {
        this.template = template;
        this.controller = BreadcrumbsController;
    }

}

class BreadcrumbsController {
    constructor ($transitions,itemsStoreService){

        this.itemDetailsActive = null;

        this.itemsStoreService = itemsStoreService;

        $transitions.onSuccess({},this.transitionsHandler());

    }

    transitionsHandler() {
        return  (transition) => {

            let state = transition.injector().get('$state');

            if (state.params.hasOwnProperty('itemId')) {
                this.itemDetailsActive = this.itemsStoreService.getItem(state.params.itemId)
            }
            else {
                this.itemDetailsActive = null;
            }
        }
    }

}

BreadcrumbsController.$inject = ['$transitions','itemsStoreService'];
export default BreadcrumbsComponent;