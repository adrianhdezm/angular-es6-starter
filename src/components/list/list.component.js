'use strict';

import template from './list.template.html';


class ListComponent {

    constructor() {
        this.template = template;
        this.controller = ItemListController;
        this.bindings = {
            list: '<'
        };
    }
}


class ItemListController{

    update(item, prop, value) {
        item[prop] = value;
    };

    delete(item) {
        var idx = this.list.indexOf(item);
        if (idx >= 0) {
            this.list.splice(idx, 1);
        }
    };

}


export default ListComponent;