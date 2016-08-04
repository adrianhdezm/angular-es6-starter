'use strict';

import template from './heroDetail.tpl.html';

class HeroDetailsCtrl{

    delete() {
        this.onDelete({hero: this.hero});
    };

    update(prop, value) {
        this.onUpdate(
            {
                hero: this.hero,
                prop: prop,
                value: value
            });
    };

};


export default {
    template: template,
    controller: HeroDetailsCtrl,
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    }
}