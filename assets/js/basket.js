// #########################################################
// This file assumes the existence of a `store` global variable
// #########################################################

class Basket extends HTMLElement {
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
    let totalNumberDivText = document.createTextNode('Total number of items: 0');
    totalNumberDiv.appendChild(totalNumberDivText);

    let totalPriceDiv = document.createElement('div');
    let totalPriceDivText = document.createTextNode('Total Price: 0.00 $');
    totalPriceDiv.appendChild(totalPriceDivText);

    this.appendChild(totalNumberDiv);
    this.appendChild(totalPriceDiv);
  }
}

customElements.define('basket-el', Basket);

store.registerListener(basketElCallback);

function basketElCallback(data) {
  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  basket = document.getElementsByTagName('basket-el')[0];
  basket.children[0].textContent = 'Total number of items: ' + totalNumber;
  basket.children[1].textContent = 'Total Price: ' + totalPrice + '$';
}
