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
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      img {
        max-width: 390px;
         width: 100%;
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
        a {
        border-radius: 8px;
        font-size: 16px;
        border-style: none;
        background-color: #220d5d;
        color: white;
        padding: 8px;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        background-color: #f0e68c;
        color: white;
      }
    `;
  }

  render() {
    return html`<div><img src="${this.imageLink}"><h2>${this.title}</h2><p>${this.description}</p><a href='${this.link}'>${this.buttontext}</a></div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      imageLink: { type: String, attribute: "image-link" },
      description: { type: String},
      link: { type: String},
      buttontext: { type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
