'use strict';

import angular from 'angular';

import container from './components/container/container';

var appModule = angular.module('app', [
    container.name
]);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;