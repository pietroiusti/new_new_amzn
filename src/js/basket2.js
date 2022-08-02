console.log('basket2.js');

class BasketStateless extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let totalNumberDiv = document.createElement('div');
    let totalNumberDivText = document.createTextNode(this.getAttribute('totalNumber'));
    totalNumberDiv.appendChild(totalNumberDivText);
    
    let totalPriceDiv = document.createElement('div');
    let totalPriceDivText = document.createTextNode(this.getAttribute('totalPrice'));
    totalPriceDiv.appendChild(totalPriceDivText);
    
    this.appendChild(totalNumberDiv);
    this.appendChild(totalPriceDiv);
  }
}

customElements.define('basket-el2', BasketStateless);

