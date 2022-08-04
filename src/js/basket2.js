console.log('basket2.js');

class BasketStateless extends HTMLElement {
  constructor() {
    super();
    this.connectedCallbackHasBeenCalled = false;
  }

  connectedCallback() {
    this.connectedCallbackHasBeenCalled = true;
    let totalNumberDiv = document.createElement('div');
    this.totalNumberDivRef = totalNumberDiv;
    let totalNumberDivText = document.createTextNode(this.getAttribute('totalnumber'));
    totalNumberDiv.appendChild(totalNumberDivText);
    
    let totalPriceDiv = document.createElement('div');
    this.totalPriceDivRef = totalPriceDiv;
    let totalPriceDivText = document.createTextNode(this.getAttribute('totalprice'));
    totalPriceDiv.appendChild(totalPriceDivText);
    
    this.appendChild(totalNumberDiv);
    this.appendChild(totalPriceDiv);
  }

  static get observedAttributes() {
    return [ 'totalnumber', 'totalprice', ];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('BasketStateless attributeChangedCallback');

    if (!this.connectedCallbackHasBeenCalled)
      return;

    console.log('attrName: '+ attrName);

    if (oldVal !== newVal) {
      if (attrName === 'totalnumber') {
        //console.log(this.totalNumberDivRef);
        this.totalNumberDivRef.textContent = "Total number of items: " + newVal;
      } else if (attrName === 'totalprice') {
        //console.log(this.totalNumberDivRef);
        this.totalPriceDivRef.textContent = "Total Price:  $ " + newVal;
      } else {
        console.log('??????????');
        console.log(attrName);
      }
    }
    // let divs = this.children;
    // divs[0].textContent = 'Total number of items: ' + totalNumber;
    // divs[1].textContent = 'totalprice', 'Total Price:  $ ' + totalPrice;
  }
}

customElements.define('basket-el2', BasketStateless);

