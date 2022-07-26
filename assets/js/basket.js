class Basket extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div id="totalNumberDiv">Total number of items: 0</div>
        <div id="totalPriceDiv">Total Price: 0.00 $</div>
    `;
  }

  attributeChangedCallback() {
    console.log('hello world');
  }
}
customElements.define('basket-el', Basket);
