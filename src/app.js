'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ItemList from './components/list/list';
import ItemListItem from './components/list-item/list-item';
import EditableField from './components/editable-field/editable-field';
import Details from './components/view-details/details';
import Dashboard from './components/view-dashboard/dashboard';
import Store from './components/items-store/items-store';


import Config from './config';


var appModule = angular.module('app', [
    uiRouter,
    Store.name,
    Dashboard.name,
    Details.name,
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