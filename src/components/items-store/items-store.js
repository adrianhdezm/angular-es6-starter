'use strict';

import angular from 'angular';

import ItemStoreService from './items-store.service'


export default angular.module('itemsStore', [])
    .service('itemsStoreService', ItemStoreService)