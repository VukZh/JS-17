import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class MyTree extends PolymerElement {
    static get template() {
        return html `

    <template is="dom-repeat" items="{{myarray}}">

        <my-leaf txt = {{item.id}}></my-leaf>
        <my-tree myarray="{{item.items}}"></my-tree>

    </template>`;

    }

    connectedCallback() {
        super.connectedCallback();
        console.log('tree created!');
    }

    static get properties() {
        return {
            myarray: Array
        };
    }
}
customElements.define('my-tree', MyTree);