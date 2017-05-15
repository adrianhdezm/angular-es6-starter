'use strict';

import AppHeaderComponent from './app-header.component';


export default angular.module('AppHeader', [])
.component(AppHeaderComponent.name, new AppHeaderComponent);