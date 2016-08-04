'use strict';

import angular from 'angular';

import heroList from './components/HeroList/heroList';
import heroDetail from './components/HeroDetail/heroDetail';
import editableField from './components/EditableField/editableField';

var appModule = angular.module('app', []);

appModule.component('editableField', editableField);
appModule.component('heroList', heroList);
appModule.component('heroDetail', heroDetail);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;