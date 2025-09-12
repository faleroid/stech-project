class MySocmed extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        
        `;
  }

  render() {
    this.innerHTML = `
    
        `;

    this.updateStyle();
    this.shadowRoot.append(this._style);
  }
}

customElements.define('my-socmed', MySocmed);
