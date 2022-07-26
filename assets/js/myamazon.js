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
            </div>
            <div class="imgDiv">
                <img src="${imgSrc}">
            </div>
            <div class="qtty">
                ${qtty}
            </div>
            <button onClick="removeItem(event)">-</button>
            <button onClick="addItem(event)">+</button>
        </div>
    `;
  }
}

customElements.define('list-item', Item);

function render_list_of_items2() {
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let item = document.createElement('list-item');
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

function render_list_of_items() {
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    let name = data[i].name;
    item.id = name;

    let nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    let nameText = document.createTextNode(capitalizeFirstLetter(name));
    nameDiv.appendChild(nameText);
    item.appendChild(nameDiv);

    let priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    let priceText = document.createTextNode(`${data[i].price} $`);
    priceDiv.appendChild(priceText);
    item.appendChild(priceDiv);

    let imgDiv = document.createElement('div');
    priceDiv.classList.add('itemImg');
    let img = document.createElement('img');
    img.src = `./assets/img/${data[i].name}.jpg`;
    imgDiv.appendChild(img);
    item.appendChild(imgDiv);

    let qttyDiv = document.createElement('div');
    qttyDiv.classList.add('qtty');
    let qttyText = document.createTextNode(data[i].qtty);
    qttyDiv.appendChild(qttyText);
    item.appendChild(qttyDiv);

    let buttonMinus = document.createElement('button');
    buttonMinus.addEventListener('click', (e) => {
      removeItem(e);
    });
    let buttonMinusText = document.createTextNode('-');
    buttonMinus.appendChild(buttonMinusText);
    item.appendChild(buttonMinus);

    let buttonPlus = document.createElement('button');
    buttonPlus.addEventListener('click', (e) => {
      addItem(e);
    });
    let buttonPlusText = document.createTextNode('+');
    buttonPlus.appendChild(buttonPlusText);
    item.appendChild(buttonPlus);

    itemList.appendChild(item);
  }
}

function renderBasket() {
  let basket = document.getElementById('basketDiv');

  //total number of items
  let totalNumberDiv = document.createElement('div');
  totalNumberDiv.id = 'totalNumberDiv';
  let totalNumberText = document.createTextNode('Total number of items: 0');
  totalNumberDiv.appendChild(totalNumberText);
  basket.appendChild(totalNumberDiv);

  //total price
  let totalPriceDiv = document.createElement('div');
  totalPriceDiv.id = 'totalPriceDiv';
  let totalPriceText = document.createTextNode('Total Price: 0.00 $');
  totalPriceDiv.appendChild(totalPriceText);
  basket.appendChild(totalPriceDiv);
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
  render_list_of_items2();
})();
