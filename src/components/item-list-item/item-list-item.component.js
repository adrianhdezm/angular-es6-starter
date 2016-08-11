'use strict';

import template from './item-list-item.template.html';


class ItemListItemComponent {
    constructor(){
        this.template = template;
        this.controller = ItemListItemController;
        this.bindings = {
            item: '<',
            onDelete: '&',
            onUpdate: '&'
        };
    }
}


class ItemListItemController{

    delete() {
        this.onDelete({item: this.item});
    };

    update(prop, value) {
        this.onUpdate(
            {
                item: this.item,
                prop: prop,
                value: value
            });
    };

};


export default ItemListItemComponent;