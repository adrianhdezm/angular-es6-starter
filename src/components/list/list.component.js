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
    constructor(){

    }

}


export default ListComponent;