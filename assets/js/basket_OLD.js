// #########################################################
// This file assumes the existence of a `store` global variable
// #########################################################

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

store.registerListener(function basketElCallback(data) {
  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  let basketEl = document.getElementsByTagName('basket-el')[0];
  basketEl.setAttribute('items', totalNumber);
  basketEl.setAttribute('price', totalPrice);
});
