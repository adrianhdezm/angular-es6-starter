'use strict';

import template from './app-content.template.html';

class AppContentComponent {
    constructor(){
        this.controller = ComponentController;
        this.template = template;

    }

    static get name() {
        return 'appContent';
    }


}

class ComponentController{
    constructor(){

    }

}


export default AppContentComponent;