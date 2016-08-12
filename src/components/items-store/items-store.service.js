
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
}


export default ItemsStoreService;