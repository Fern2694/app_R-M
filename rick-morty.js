import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-card/paper-card.js';

export class RickMorty extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: #34495E ;
        display: flex;
        padding: 25px;
        color: var(--lit-data-text-color, #000);
      }
      .card {
        margin:auto;
        background-color: #F1948A ;
      }
      .container{
        width:90%;
        border:1px dotted #f00;
        padding:8px;margin:auto;
        background-color: #16A085;
      }
    `;
  }
 static get properties(){
   return {
     data: { type: Array },
     person: { type:Array }
   };
 }

 constructor(){
  super();
  this.data= [];
  this.person= [];
  this.url = "https://rickandmortyapi.com/api/character/" 
 }
firstUpdated(){
  fetch(`${this.url}`)
    .then(r => r.json())
    .then(r => {
      this.data = r.results;
      this.traelos();
    });
}

  traelos(){
    this.data.forEach((item, id) =>{
      this.person.push({
        name: item.name,
        index: item.id,
        image: item.image
      });
    });
  }
 render() {
  return html `
  <div class="container">
  <h1>APP</h1>
  <h2>Rick & Morty Character</h2>
    ${this.person.map(item => html` 
    <paper-card>
      <div class="card">
        <p>${item.image}</p>
        <p>Nombre: ${item.name}</p>
        <p>No: ${item.index}</p>
      </div>
    </paper-card>
    `)}
  </div> 
    `;
  
    }
}

 
customElements.define('rick-morty', RickMorty)