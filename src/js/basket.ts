console.log('basket.ts');

import { store } from "./myamazon";

class Basket extends HTMLElement {
  constructor() {
    super();
    store.register('data', this.basketElCallback);
  }

  connectedCallback() {
    // OLD:
    // this.innerHTML = `
    //     <div id="totalNumberDiv">Total number of items: 0</div>
    //     <div id="totalPriceDiv">Total Price: 0.00 $</div>
    // `;
    // USE DOM MANIPULATION INSTEAD:
    let totalNumberDiv = document.createElement('div');
    let totalNumberDivText = document.createTextNode('Total number of items: 0');
    totalNumberDiv.appendChild(totalNumberDivText);

    let totalPriceDiv = document.createElement('div');
    let totalPriceDivText = document.createTextNode('Total Price: 0.00 $');
    totalPriceDiv.appendChild(totalPriceDivText);

    this.appendChild(totalNumberDiv);
    this.appendChild(totalPriceDiv);
  }

  basketElCallback(data: any[]) {
    //console.log('basketElCallback');

    let totalNumber = data.reduce((acc: any, a: { qtty: any; }) => acc + a.qtty, 0);
    let totalPrice = data.reduce((acc: number, a: { qtty: number; price: number; }) => acc + a.qtty*a.price, 0);
    totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

    let basket = document.getElementsByTagName('basket-el')[0];
    basket.children[0].textContent = 'Total number of items: ' + totalNumber;
    basket.children[1].textContent = 'Total Price: ' + totalPrice + '$';
  }
}

customElements.define('basket-el', Basket);
