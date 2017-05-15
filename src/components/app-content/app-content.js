'use strict';

import angular from 'angular';
import AppContentComponent from './app-content.component';

import AppHeader from './../app-header/app-header';
import AppFooter from './../app-footer/app-footer';


export default angular.module('AppContent', [
    AppHeader.name,
    AppFooter.name
])
.component(AppContentComponent.name, new AppContentComponent);