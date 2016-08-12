
'use strict';

import template from './dashboard.template.html';

class DashboardComponent {
    constructor(){
        this.template = template;
        this.bindings = {
            items: '<',
        }
    }
}


export default DashboardComponent;
