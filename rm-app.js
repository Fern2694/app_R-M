import { LitElement, html, css } from 'lit-element';
import './rick-morty.js';

 class RmApp extends LitElement {
  static get styles() {
    return css`
    :host{
      display: flex;
      align-items:center;
      text-align:center;
    }
    `;
  }

  render(){
    return html `
    
    <rick-morty></rick-morty>
    `;
  }
}
customElements.define('rm-app', RmApp)
