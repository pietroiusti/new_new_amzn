'use strict';
console.log('store.ts');

import _ from 'lodash';

class Store2<T> {
  listeners: {[key:string]:Function[]};// listeners is an object with
                                       // an undefined number of
                                       // members whose names are
                                       // strings (rather than numbers
                                       // or symbols) and whose values
                                       // are arrays of functions
  state: T;

  constructor(state: T) {
    this.listeners = {};
    this.state = state;
  }
  
  register(prop: string, cb: (data: any) => void) {
    if (!this.listeners[prop])
      this.listeners[prop] = [];
    
    this.listeners[prop].push(cb);
  }

  get(prop: keyof T) {
    return this.state[prop];
  }

  set(prop: string, newVal: any[]) {
    //console.log('store set');
    this.state[prop] = newVal;

    if (prop in this.listeners) {
     for (let f of this.listeners[prop]) {
        f(newVal);
      }
    }
  }
}

export default Store2;
