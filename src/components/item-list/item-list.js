'use strict';

import angular from 'angular';

import ItemListComponent from './item-list.component'


export default angular.module('itemList', [])
    .component('itemList', new ItemListComponent);