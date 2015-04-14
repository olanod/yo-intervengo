import {Behavior} from 'aurelia-framework';
import {addStyleToShadowElement as addStyle} from 'lib/util';
//TODO: import later from the html (aurelia fix pending)
import style from './yi-marker.css!text';

export class YiMarker {

    static metadata() {
        return Behavior
            .customElement('yi-marker')
            .withProperty('icon')
            .useShadowDOM();
    }

    static inject() { return [Element]; }

    constructor(element) {
        this.element = element;
    }

    bind() {
        //TODO:  should be added to the template element before compile (aurelia fix pending)
        addStyle(this.element, style);
    }

    toggleType() {
        this.element.classList.toggle('alt');
    }

    bounce() {
        this.element.animate([
                {transform: 'translateY(0px)'},
                {transform: 'translateY(-30px)'},
                {transform: 'translateY(0px)'},
                {transform: 'translateY(-8px)'},
                {transform: 'translateY(0px)'}
            ], {
                direction: 'alternate', duration: 350, iterations: 1
            }
        );
    }
}
