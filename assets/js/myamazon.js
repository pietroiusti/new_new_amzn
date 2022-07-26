var data = [
  {name: 'benjerry', price: 5.95, qtty: 0},
  {name: 'caffelatte', price: 1.27, qtty: 0},
  {name: 'calippo', price: 4.10, qtty: 0},
  {name: 'evax', price: 2.40, qtty: 0},
  {name: 'pizza', price: 4.95, qtty: 0},
  {name: 'scottex', price: 4.50, qtty: 0},
  {name: 'spaghetti', price: 1.25, qtty: 0},
  {name: 'triangulos', price: 2.35, qtty: 0},
  {name: 'xibeca', price: 3.75, qtty: 0},
  {name: 'chipsahoy', price: 2.20, qtty: 0}
];

class Item extends HTMLElement {
  constructor() {
    super();
  }

  handleClickAdd() {
    console.log('add');
  }

  handleClickRemove() {
    console.log('decrease');
  }

  connectedCallback() {
    let name = this.getAttribute('name');
    let price = this.getAttribute('price');
    let imgSrc = this.getAttribute('imgSrc');
    let qtty = this.getAttribute('qtty');

    this.innerHTML = `
        <div id="${name}" class="item">
            <div class="name">
                ${name}
            </div>
            <div class="price">
                ${price}
R            </div>
            <div class="imgDiv">
                <img src="${imgSrc}">
            </div>
            <div class="qtty">
                ${qtty}
            </div>
            <button id="addButton">-</button>
            <button id="removeButton">+</button>
        </div>
    `;

    document.getElementById('addButton')
      .addEventListener('click', this.handleClickAdd);

    document.getElementById('removeButton')
      .addEventListener('click', this.handleClickRemove);
  }
}
customElements.define('list-el', Item);

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
}
customElements.define('basket-el', Basket);

function renderBasket() {
  let basketDiv = document.getElementById('basketDiv');
  let basket = document.createElement('basket-el');
  basketDiv.appendChild(basket);
}

function render_list_of_items() {
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let item = document.createElement('list-el');
    item.setAttribute('name', name);
    item.setAttribute('price', data[i].price);
    item.setAttribute('imgSrc', `./assets/img/${name}.jpg`);
    item.setAttribute('qtty', data[i].qtty);
    itemList.appendChild(item);
  }
}

function addItem(event) {
  let parent = event.target.parentElement;
  console.log(parent);
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  item.qtty += 1;
  let qtty = Number(parent.querySelector('.qtty').textContent);
  parent.querySelector('.qtty').textContent = qtty + 1;

  updateBasket();
}

function removeItem(event) {
  let parent = event.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    item.qtty -= 1;
    // render new qtty
    let qtty = Number(parent.querySelector('.qtty').textContent);
    parent.querySelector('.qtty').textContent = qtty - 1;
  }

  updateBasket()
}

function updateBasket() {
  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  let totalNumberDiv = document.getElementById('totalNumberDiv');
  totalNumberDiv.textContent = 'Total number of items: ' + totalNumber;

  let totalPriceDiv = document.getElementById('totalPriceDiv');
  totalPriceDiv.textContent = 'Total Price: ' + totalPrice + ' $';
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

(function init() {
  renderBasket();
  render_list_of_items();
})();
