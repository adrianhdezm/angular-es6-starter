'use strict';

import template from './details.template.html';


class DetailsComponent {
    constructor(){
        this.template = template;
        this.bindings = {
            item: '<'
        };
    }
}



export default DetailsComponent;