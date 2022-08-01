console.log('myamazon.js');

import store from './store.js';
//import './store.js';

//import Basket from './basket.js';
import './basket.js';
//customElements.define('basket-el', Basket);

//import Item from './card.js';
import './card.js';
//customElements.define('list-el', Item);

import '../css/myamazon.css';


let data = store.data;
//console.log(data);

// Make list of items (cards) listen to the custom events ('addItem'
// and 'removeItem') emitted by the buttons.
let itemList = document.getElementById('itemList');
itemList.addEventListener('addItem', (e)=>{
  console.log('itemList event listener');
  let parent = e.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);

  store.change({action: 'addItem', itemName: name});
});

itemList.addEventListener('removeItem', (e)=>{
  let parent = event.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    store.change({action: 'removeItem', itemName: name});
  }
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
    item.setAttribute('imgSrc', `../src/img/${name}.jpg`);
    item.setAttribute('qtty', data[i].qtty);
    itemList.appendChild(item);
  }
}

store.registerListener(listElCallback);

function listElCallback(data, obj) {
  console.log('listElCallback');
  let listEl = document.getElementById(obj.itemName).parentElement;
  let updatedQtty = data.find(item => item.name === obj.itemName).qtty;
  listEl.setAttribute('qtty', updatedQtty);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

(function init() {
  renderBasket();
  render_list_of_items();
})();
