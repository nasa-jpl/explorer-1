const template = ` <button><slot></slot></button>`;

class MacButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = `${style} ${template}`;
  }
}

customElements.define("mac-button", MacButton);