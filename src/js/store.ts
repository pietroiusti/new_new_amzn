'use strict';
console.log('store.js');

import _ from 'lodash';

class Store2 {
  listeners: {};
  state: any;

  constructor(state) {
    this.listeners = {};
    this.state = state;
  }
  
  register(prop, cb) {
    if (!this.listeners[prop])
      this.listeners[prop] = [];
    
    this.listeners[prop].push(cb);
  }

  get(prop) {
    return this.state[prop];
  }

  set(prop, newVal) {
    //console.log('store set');
    this.state[prop] = newVal;
    for (let f of this.listeners[prop]) {
      f(newVal);
    }
  }
}

export default Store2;
