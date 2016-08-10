'use strict';

import angular from 'angular';

import ItemDetailComponent from './item-detail.component'


export default angular.module('itemDetail', [])
    .component('itemDetail', new ItemDetailComponent);