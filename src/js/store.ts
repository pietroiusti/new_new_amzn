'use strict';
console.log('store.js');

import _ from 'lodash';

//interface ItemI { name: string, price: number, qtty: number };
import { Item } from './myamazon';

interface State {
  data: Item[];
};

class Store2 {
  listeners: {[key:string]:Function[]};// listeners is an object with an undefined number
                                       // of members whose names are strings (rather than
                                       // numbers or symbols) and whose values are functions
  state: State;

  constructor(state: State) {
    this.listeners = {};
    this.state = state;
  }
  
  register(prop: string, cb: { (data: any): void; (data: any): void; (data: any): void; }) {
    if (!this.listeners[prop])
      this.listeners[prop] = [];
    
    this.listeners[prop].push(cb);
  }

  get(prop: string) {
    return this.state[prop];
  }

  set(prop: string, newVal: any[]) {
    //console.log('store set');
    this.state[prop] = newVal;
    for (let f of this.listeners[prop]) {
      f(newVal);
    }
  }
}

export default Store2;
