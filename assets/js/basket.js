class Basket extends HTMLElement {
  constructor() {
    super();
    //this.totalNumber
    this.items = 'Total number of items: 0';
    this.price = 'Total Price: 0.00 $';
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="totalNumberDiv">${this.items}</div>
        <div id="totalPriceDiv">${this.price}</div>
    `;
  }

  static get observedAttributes() {
    return ['items', 'price', ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // update view
    //console.log('name: ' + name);
    if (name === 'items') {
      document.getElementById('totalNumberDiv').innerHTML = 'Total number of items: ' + newVal;
    } else if (name === 'price') {
      document.getElementById('totalPriceDiv').innerHTML =  'Total Price: ' + newVal + '$';
    } else {
      console.log('name is ' + name + '??');
    }
  }
}
customElements.define('basket-el', Basket);
