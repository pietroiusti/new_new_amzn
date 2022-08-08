'use strict';
console.log('store.js');

import _ from 'lodash';

class Store2 {
  listeners: {};
  state: any;

  constructor(state: { data: { name: string; price: number; qtty: number; }[]; }) {
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
