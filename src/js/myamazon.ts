console.log('myamazon.ts');

import Store2 from './store';

interface Item { //`inteface` is generally preferred over `type`...
  name: string,
  price: number,
  qtty: number,
}

// `State` declares an object type with an undefined number of
// properties whose names are strings and whose values are of
// arrays of `Item`s
interface State {
  [i:string]: Item[];
}

// data we are getting from somewhere...
let data = [
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
  ];

export const store = new Store2<State>( { data } );

interface Person {
  name: string;
  surname: string;
  registration: Date;
}
let people: Person[] = [
  {name: 'John', surname: 'Todd', registration: new Date(1995, 11, 17)},
  {name: 'Marta', surname: 'Ross', registration: new Date(2008, 11, 17)},
  {name: 'Bill', surname: 'Norton', registration: new Date(2008, 11, 17)},
];
store.set('people', people);

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
itemList.addEventListener('addItem', (e: Event): void => {
  //console.log('itemList event listener');
  let parent = (e.target as HTMLButtonElement).parentElement;
  let name = parent.id;
  actionHandler( {action: 'add', itemName: name} );
});

itemList.addEventListener('removeItem', (e: Event): void => {
  let parent = (e.target as HTMLButtonElement).parentElement;
  let name = parent.id;
  actionHandler( {action: 'remove', itemName: name} );
});

// stateless basket
function renderBasket2(): void {
  //console.log('renderBasket2');
  let data = store.get('data');
  let totalNumber = data.reduce((acc: any, a: { qtty: any; }) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc: number, a: { qtty: number; price: number; }) => acc + a.qtty*a.price, 0);
  totalPrice = Number((Math.round(totalPrice * 100) / 100).toFixed(2)); // round to two decimal places

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
function renderBasket(): void {
  //console.log('renderBasket');
  let basketDiv = document.getElementById('basketDiv');
  let basket = document.createElement('basket-el');
  basket.setAttribute('totalnumber', 'Total number of items: 0');
  basket.setAttribute('totalprice', 'Total Price: 0.00 $');
  basketDiv.appendChild(basket);
}

function render_list_of_items(): void {
  let data = store.get('data');
  //console.log('render_list_of_items');
  //console.log(data);
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let item = document.createElement('list-el');

    item.setAttribute('name', name);
    item.setAttribute('price', (data[i].price).toString());
    item.setAttribute('imgSrc', `../src/img/${name}.jpg`);
    item.setAttribute('qtty', (data[i].qtty).toString());
    itemList.appendChild(item);
  }
}

store.register('data', listElCallback2);
store.register('data', basketElCallback2); //<< stateless basket listener.
// The listener for the stateful basket is registered by the basket itself

function basketElCallback2(data: Item[]): void {
  //console.log('basketElCallback2');

  let totalNumber = data.reduce((acc: any, a: { qtty: any; }) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc: number, a: { qtty: number; price: number; }) => acc + a.qtty*a.price, 0);
  let totalPriceString = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  let statelessBasket = document.getElementsByTagName('basket-el2')[0];

  //console.log(statelessBasket);

  //console.log('setting totalNumber attribute for statelessBasket');
  statelessBasket.setAttribute('totalNumber', totalNumber);
  //console.log('setting totalprice attribute for statelessBasket');
  statelessBasket.setAttribute('totalPrice', totalPriceString);
}

function listElCallback2(data: Item[]): void {
  //console.log('listElCallback2');
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < itemList.children.length; i++) {
    //console.log(itemList.children[i]);
    let item = itemList.children[i];
    item.setAttribute('qtty', data[i].qtty.toString()); // this relies on the
                                             // fact that data and
                                             // itemList have the same
                                             // members in the same
                                             // order.
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function init(): void {
  renderBasket();
  renderBasket2();
  render_list_of_items();
};
