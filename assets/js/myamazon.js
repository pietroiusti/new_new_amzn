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

// Make list of items (cards) listen to the custom events ('addItem'
// and 'removeItem') emitted by the buttons.
let itemList = document.getElementById('itemList');
itemList.addEventListener('addItem', (e)=>{
  //console.log(e);
  let parent = e.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  item.qtty += 1;
  let qtty = Number(parent.querySelector('.qtty').textContent);

  // update card and basket
  let customWrapper = parent.parentElement;
  customWrapper.setAttribute('qtty', item.qtty);
  updateBasket();
});
itemList.addEventListener('removeItem', (e)=>{
  //console.log(e);
  let parent = event.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    item.qtty -= 1;
    let qtty = Number(parent.querySelector('.qtty').textContent);
    let customWrapper = parent.parentElement;
    customWrapper.setAttribute('qtty', item.qtty);
  }

  updateBasket()
});

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

function updateBasket() {
  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  //console.log(totalNumber);
  //console.log(totalPrice);

  let basketEl = document.getElementsByTagName('basket-el')[0];
  //console.log(basketEl);
  //console.log("changing attributes of basket...")

  basketEl.setAttribute('items', totalNumber);
  basketEl.setAttribute('price', totalPrice);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

(function init() {
  renderBasket();
  render_list_of_items();
})();
