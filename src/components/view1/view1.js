'use strict';

import angular from 'angular';
import ngRoute from 'angular-route'

import template from './view1.tpl.html';

var view1Module = angular.module('view1', [ngRoute]);


class View1Ctrl{
    constructor() {
        this.name = "View1";
    }
}


view1Module
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            template: template,
            controller: 'View1Ctrl',
            controllerAs: 'view1'
        });
    }])
    .controller('View1Ctrl', View1Ctrl);



export default view1Module;
