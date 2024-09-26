import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.imageLink = null;
    this.description = "description";
    this.link = "Link";
    this.buttontext = "button text";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        display: inline-flex;
      }
      :host([fancy]) {
        display: block;
        display: inline-flex;
         background-color: #b7c51e;
         border: 2px #5e6606;
         box-shadow: 10px 5px 5px #1f2203;
}
      img {
        max-width: 400px;         
        width: 400px;
         margin: auto;
        }
      div{
        border: solid black 8px;
        margin: 64px;
        padding: 16px;
        max-width: 400px;
        width: auto;
        border-radius: 16px;
      }
      .descriptionbox{
        margin: 16px;
        width: 300px;
        height: 50px;
        word-wrap: break-word;
        overflow-y:scroll;
      }
        a {
        border-radius: 8px;
        font-size: 16px;
        border-style: none;
        background-color: #220d5d;
        color: white;
        padding: 8px, 8px;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        background-color: #f0e68c;
        color: white;
      }
      details > summary{
        padding-bottom: 1px;
      }
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  render() {
    return html`<div><img src="${this.imageLink}"><h2>${this.title}</h2><p>${this.description}</p>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div class="descriptionbox">
    <slot>${this.description}</slot>
  </div>
</details>
    <a href='${this.link}'>${this.buttontext}</a></div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      imageLink: { type: String, attribute: "image-link" },
      description: { type: String},
      link: { type: String},
      buttontext: { type: String},
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
