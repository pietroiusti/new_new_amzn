console.log('myamazon.js');

import Store2 from './store.js'; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let store = new Store2({},
                       {
                         data: [
                           {name: 'benjerry', price: 5.95, qtty: 0},  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                           {name: 'caffelatte', price: 1.27, qtty: 0},
                           {name: 'calippo', price: 4.10, qtty: 0},
                           {name: 'evax', price: 2.40, qtty: 0},
                           {name: 'pizza', price: 4.95, qtty: 0},
                           {name: 'scottex', price: 4.50, qtty: 0},
                           {name: 'spaghetti', price: 1.25, qtty: 0},
                           {name: 'triangulos', price: 2.35, qtty: 0},
                           {name: 'xibeca', price: 3.75, qtty: 0},
                           {name: 'chipsahoy', price: 2.20, qtty: 0},
                         ]
                       },
                      );

//import './basket.js';
import './basket-stateless.js'

import './card.js';

import '../css/myamazon.css';


let foo = store.get('data');
console.log('foo:');
console.log(foo);


// Make list of items (cards) listen to the custom events ('addItem'
// and 'removeItem') emitted by the buttons.
let itemList = document.getElementById('itemList');
itemList.addEventListener('addItem', (e)=>{
  console.log('itemList event listener');
  let parent = e.target.parentElement;
  let name = parent.id;
  let data = store.get('data');
  // console.log(data);
  // console.log(name);
  let item = data.find((item) => item.name === name);
  item.qtty +=1;

  //store.change({action: 'addItem', itemName: name}); // old <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  store.set('data', data);
});

itemList.addEventListener('removeItem', (e) => {
  let parent = event.target.parentElement;
  let name = parent.id;
  let data = store.get('data');
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    //store.change({action: 'removeItem', itemName: name}); // old <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    item.qtty -= 1;
    store.set('data', data);
  }
});

function renderBasket() {
  let data = store.get('data');
  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  console.log('renderBasket1');
  let basketDiv = document.getElementById('basketDiv');
  console.log('renderBasket2');
  let basket = document.createElement('basket-el');
  //basket.setAttribute('totalNumber', 'Total number of items: 0');
  basket.setAttribute('totalNumber', 'Total number of items: ' + totalNumber);
  //basket.setAttribute('totalprice', 'Total Price: 0.00 $');
  basket.setAttribute('totalprice', 'Total Price: ' + totalPrice + ' $');
  console.log('renderBasket3');
  basketDiv.appendChild(basket);
  console.log('renderBasket4');
}

// old
// function renderBasket() {
//   console.log('renderBasket1');
//   let basketDiv = document.getElementById('basketDiv');
//   console.log('renderBasket2');
//   let basket = document.createElement('basket-el');
//   basket.setAttribute('totalNumber', 'Total number of items: 0');
//   basket.setAttribute('totalprice', 'Total Price: 0.00 $');
//   console.log('renderBasket3');
//   basketDiv.appendChild(basket);
//   console.log('renderBasket4');
// }

function render_list_of_items() {
  let data = store.get('data');
  //console.log('data:');
  //console.log(data);
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

//store.registerListener(listElCallback); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
store.register('data', listElCallback2);
store.register('data', basketElCallback2);

function basketElCallback2() {
  console.log('basketElCallback2');
  let basketDiv = document.getElementById('basketDiv');
  basketDiv.innerHTML = "";
  renderBasket();
}

function listElCallback2() {
  console.log('listElCallback2');
  let itemList = document.getElementById('itemList');
  itemList.innerHTML = "";
  render_list_of_items();
}

// function listElCallback(data, obj) {
//   console.log('listElCallback');
//   let listEl = document.getElementById(obj.itemName).parentElement;
//   let updatedQtty = data.find(item => item.name === obj.itemName).qtty;
//   listEl.setAttribute('qtty', updatedQtty);
// }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

(function init() {
  renderBasket();
  render_list_of_items();
})();
