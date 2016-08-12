'use strict';

import template from './list-item.template.html';


class ListItemComponent {
    constructor(){
        this.template = template;
        this.controller = ListItemController;
        this.bindings = {
            item: '<',
            onDelete: '&',
            onUpdate: '&'
        };
    }
}


class ListItemController{

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


export default ListItemComponent;