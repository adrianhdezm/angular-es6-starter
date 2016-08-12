'use strict';

import angular from 'angular';

import ItemStoreService from './item-store.service'


export default angular.module('itemStore', [])
    .service('itemStoreService', ItemStoreService)