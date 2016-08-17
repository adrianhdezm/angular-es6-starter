
'use strict';

import data from './items-store.data';


class ItemsStoreService {
    constructor() {
        this.items = data;
    }

    getItems() {
        return this.items;
    }

    getItem(id) {
       return this.items[id];
    }


    updateItem(olditem,newItem) {
        var idx = this.items.indexOf(olditem);
        if (idx >= 0) {
            this.items[idx] = newItem;
        }
    }

    deleteItem(item) {
        var idx = this.items.indexOf(item);
        if (idx >= 0) {
            this.items.splice(idx, 1);
        }
    }

    updateItemProperty(item, prop, value) {
        item[prop] = value;
    };
}


export default ItemsStoreService;