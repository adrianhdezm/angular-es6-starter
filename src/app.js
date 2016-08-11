'use strict';

import angular from 'angular';

import ItemList from './components/item-list/item-list';
import ItemListItem from './components/item-list-item/item-list-item';
import EditableField from './components/editable-field/editable-field';
import ItemDetail from './components/item-detail/item-detail';

var appModule = angular.module('app', [
    EditableField.name,
    ItemList.name,
    ItemListItem.name,
    ItemDetail.name
]);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;