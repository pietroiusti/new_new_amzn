// class Basket extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = `
//         <div id="totalNumberDiv">Total number of items: 0</div>
//         <div id="totalPriceDiv">Total Price: 0.00 $</div>
//     `;
//   }

//   attributeChangedCallback() {
//     console.log('hello world');
//   }
// }
// customElements.define('basket-el', Basket);


class Basket extends HTMLElement {
  constructor() {
    super();
    this.totalNumber = 'Total number of items: 0';
    this.totalPrice = 'Total Price: 0.00 $';
    this.test = 'hola';
  }

  static get observedAttributes() {
    return ['totalNumber', 'totalPrice', 'test'];
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="totalNumberDiv">${this.totalNumber}</div>
        <div id="totalPriceDiv">${this.totalPrice}</div>
        <div>${this.test}</div>
    `;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback: '+ name, oldVal, newVal);
    // todo: update view
  }
}
customElements.define('basket-el', Basket);
