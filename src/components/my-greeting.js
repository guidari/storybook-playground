import { LitElement, html, css } from "lit";

class MyGreeting extends LitElement {
  static properties = {
    name: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }
    .card {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      display: inline-block;
    }
    .name {
      color: #0b5;
      font-weight: 700;
    }
  `;

  constructor() {
    super();
    this.name = "friend";
  }

  render() {
    return html`
      <div class="card">
        <div>Hello, <span class="name">${this.name}</span>!</div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("my-greeting", MyGreeting);
