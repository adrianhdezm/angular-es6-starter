'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ItemList from './components/item-list/item-list';
import ItemListItem from './components/item-list-item/item-list-item';
import EditableField from './components/editable-field/editable-field';
import ItemDetail from './components/item-detail/item-detail';
import Dashboard from './components/dashboard/dashboard';
import ItemStore from './components/item-store/item-store';


import Config from './config';


var appModule = angular.module('app', [
    uiRouter,
    ItemStore.name,
    Dashboard.name,
    ItemDetail.name,
    EditableField.name,
    ItemList.name,
    ItemListItem.name,
]);

appModule.config(Config);

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;