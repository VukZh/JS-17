import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyLeaf extends PolymerElement {
    static get template() {
        return html `
      <h3 style="font-size: 150%; font-family: monospace; color: #269900">Leaf: [[txt]]</h3>`;
    }
    static get properties() {
        return {
            txt: String
        };
    }
}
customElements.define('my-leaf', MyLeaf);
