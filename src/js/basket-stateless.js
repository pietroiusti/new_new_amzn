// This file assumes the existence of `store` global variable


console.log('basket-stateless.js');

class BasketStateless extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // OLD:
    // this.innerHTML = `
    //     <div id="totalNumberDiv">Total number of items: 0</div>
    //     <div id="totalPriceDiv">Total Price: 0.00 $</div>
    // `;
    // USE DOM MANIPULATION INSTEAD:
    let totalNumberDiv = document.createElement('div');
    let totalNumberDivText = document.createTextNode(this.getAttribute('totalNumber'));
    totalNumberDiv.appendChild(totalNumberDivText);
    
    let totalPriceDiv = document.createElement('div');
    let totalPriceDivText = document.createTextNode(this.getAttribute('totalPrice'));
    totalPriceDiv.appendChild(totalPriceDivText);
    
    this.appendChild(totalNumberDiv);
    this.appendChild(totalPriceDiv);
  }

  //basketStatelessElCallback(data) {
    //console.log('basketElCallback');
    // let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
    // let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
    // totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

    // let basket = document.getElementsByTagName('basket-el')[0];
    // basket.children[0].textContent = 'Total number of items: ' + totalNumber;
    // basket.children[1].textContent = 'Total Price: ' + totalPrice + '$';
  //}
}

customElements.define('basket-el', BasketStateless);

//export default Basket;

