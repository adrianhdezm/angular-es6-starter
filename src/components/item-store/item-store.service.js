
'use strict';


class ItemStoreService {
    constructor() {
        this.items = [
            {id: 1, name: 'Superman', location: ''},
            {id: 2, name: 'Batman',location: 'Wayne Manor'},
            {id: 3, name: 'Superman', location: ''},
            {id: 4, name: 'Batman',location: 'Wayne Manor'}
        ];
    }

    getItems() {
        return this.items;
    }

    getItem(id) {
       return this.items[id];
    }
}


export default ItemStoreService;