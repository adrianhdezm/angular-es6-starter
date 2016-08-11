'use strict';

import angular from 'angular';

import ItemDetailComponent from './item-list-item.component'


export default angular.module('itemListItem', [])
    .component('itemListItem', new ItemDetailComponent);