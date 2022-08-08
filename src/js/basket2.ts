console.log('basket2.js');

class BasketStateless extends HTMLElement {
  connectedCallbackHasBeenCalled: boolean;
  totalNumberDivRef: HTMLDivElement;
  totalPriceDivRef: HTMLDivElement;
  constructor() {
    super();
    this.connectedCallbackHasBeenCalled = false;
  }

  connectedCallback() {
    let props = JSON.parse(this.getAttribute('props'));

    this.connectedCallbackHasBeenCalled = true;
    let totalNumberDiv = document.createElement('div');
    this.totalNumberDivRef = totalNumberDiv;
    let totalNumberDivText = document.createTextNode(props.totalnumber);
    totalNumberDiv.appendChild(totalNumberDivText);
    
    let totalPriceDiv = document.createElement('div');
    this.totalPriceDivRef = totalPriceDiv;
    let totalPriceDivText = document.createTextNode(props.totalprice);
    totalPriceDiv.appendChild(totalPriceDivText);
    
    this.appendChild(totalNumberDiv);
    this.appendChild(totalPriceDiv);
  }

  static get observedAttributes() {
    return [ 'totalnumber', 'totalprice', ];
  }

  attributeChangedCallback(attrName: string, oldVal: any, newVal: string) {
    //console.log('BasketStateless attributeChangedCallback');

    if (!this.connectedCallbackHasBeenCalled)
      return;

    //console.log('attrName: '+ attrName);

    if (oldVal !== newVal) {
      if (attrName === 'totalnumber') {
        this.totalNumberDivRef.textContent = "Total number of items: " + newVal;
      } else if (attrName === 'totalprice') {
        this.totalPriceDivRef.textContent = "Total Price:  $ " + newVal;
      } else {
        console.log('??????????');
        console.log(attrName);
      }
    }
  }
}

customElements.define('basket-el2', BasketStateless);

