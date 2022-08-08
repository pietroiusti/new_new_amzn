console.log('myamazon.js');

import Store2 from './store';
export const store = new Store2(
                       {
                         data: [
                           {name: 'benjerry', price: 5.95, qtty: 0},
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

import { actionHandler } from './actionHandler';

import './basket';

import './basket2'

import './card';

import '../css/myamazon.css';

//import { hello } from "./test.js";

//hello();

// Make list of items (cards) listen to the custom events ('addItem'
// and 'removeItem') emitted by the buttons.
let itemList = document.getElementById('itemList');
itemList.addEventListener('addItem', (e) => {
  //console.log('itemList event listener');
  let parent = (<HTMLButtonElement>e.target).parentElement;
  let name = parent.id;
  actionHandler( {action: 'add', itemName: name} );
});

itemList.addEventListener('removeItem', (e) => {
  let parent = (<HTMLButtonElement>e.target).parentElement;
  let name = parent.id;
  actionHandler( {action: 'remove', itemName: name} );
});

// stateless basket
function renderBasket2() {
  //console.log('renderBasket2');
  let data = store.get('data');
  let totalNumber = data.reduce((acc: any, a: { qtty: any; }) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc: number, a: { qtty: number; price: number; }) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  let basketDiv = document.getElementById('basketDiv2');
  let basket = document.createElement('basket-el2');
  basket.setAttribute('totalnumber', 'Total number of items: ' + totalNumber);
  basket.setAttribute('totalprice', 'Total Price:  $ ' + totalPrice);

  let propObj = {
    totalnumber: 'Total number of items: 0',
    totalprice: 'Total Price: 0.00 $',
  };
  basket.setAttribute('props', JSON.stringify(propObj));

  basketDiv.appendChild(basket);
}

// stateful basket
function renderBasket() {
  //console.log('renderBasket');
  let basketDiv = document.getElementById('basketDiv');
  let basket = document.createElement('basket-el');
  basket.setAttribute('totalnumber', 'Total number of items: 0');
  basket.setAttribute('totalprice', 'Total Price: 0.00 $');
  basketDiv.appendChild(basket);
}

function render_list_of_items() {
  let data = store.get('data');
  //console.log('render_list_of_items');
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

store.register('data', listElCallback2);
store.register('data', basketElCallback2); //<< stateless basket listener.
// The listener for the stateful basket is registered by the basket itself

function basketElCallback2(data: any[]) {
  //console.log('basketElCallback2');

  let totalNumber = data.reduce((acc: any, a: { qtty: any; }) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc: number, a: { qtty: number; price: number; }) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  let statelessBasket = document.getElementsByTagName('basket-el2')[0];

  //console.log(statelessBasket);

  //console.log('setting totalNumber attribute for statelessBasket');
  statelessBasket.setAttribute('totalNumber', totalNumber);
  //console.log('setting totalprice attribute for statelessBasket');
  statelessBasket.setAttribute('totalPrice', totalPrice);
}

function listElCallback2(data: { qtty: string; }[]) {
  //console.log('listElCallback2');
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < itemList.children.length; i++) {
    //console.log(itemList.children[i]);
    let item = itemList.children[i];
    item.setAttribute('qtty', data[i].qtty); // this relies on the
                                             // fact that data and
                                             // itemList have the same
                                             // members in the same
                                             // order.
  }
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function init() {
  renderBasket();
  renderBasket2();
  render_list_of_items();
};
