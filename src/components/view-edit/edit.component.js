'use strict';

import template from './edit.template.html';


class EditComponent {
    constructor(){
        this.template = template;
        this.controller = EditController;
        this.bindings = {
            item: '<'
        };
    }
}

class EditController {

    constructor(itemsStoreService) {
        this.itemsStoreService = itemsStoreService;

        this.model = JSON.parse(JSON.stringify(this.item));

    }

    reset() {
        this.model = JSON.parse(JSON.stringify(this.item));
    };

    update() {
        this.itemsStoreService.updateItem(this.item,this.model);

    };

};

EditController.$inject = ['itemsStoreService'];

export default EditComponent;