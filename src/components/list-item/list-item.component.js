'use strict';

import template from './list-item.template.html';


class ListItemComponent {
    constructor(){
        this.template = template;
        this.controller = ListItemController;
        this.bindings = {
            item: '<'
        };
    }
}



class ListItemController{

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

ListItemController.$inject = ['itemsStoreService'];


export default ListItemComponent;