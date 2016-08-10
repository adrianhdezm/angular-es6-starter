'use strict';

import template from './item-detail.template.html';


class ItemDetailComponent {
    constructor(){
        this.template = template;
        this.controller = HeroDetailsCtrl;
        this.bindings = {
            item: '<',
            onDelete: '&',
            onUpdate: '&'
        };
    }
}


class HeroDetailsCtrl{

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


export default ItemDetailComponent;