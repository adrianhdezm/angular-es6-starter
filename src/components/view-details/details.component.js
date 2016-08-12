'use strict';

import template from './details.template.html';


class DetailsComponent {
    constructor(){
        this.template = template;
        this.controller = DetailsController;
        this.bindings = {
            item: '<'
        };
    }
}

class DetailsController {

    constructor(itemsStoreService) {
        this.itemsStoreService = itemsStoreService;
    }

    delete() {
        this.itemsStoreService.deleteItem(this.item);
    };

    update(prop, value) {
        this.itemsStoreService.updateItemProperty(this.item,prop, value)
    };

};

DetailsController.$inject = ['itemsStoreService'];

export default DetailsComponent;