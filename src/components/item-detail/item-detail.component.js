'use strict';

import template from './item-detail.template.html';


class ItemDetailComponent {
    constructor(){
        this.template = template;
        this.bindings = {
            item: '<'
        };
    }
}



export default ItemDetailComponent;