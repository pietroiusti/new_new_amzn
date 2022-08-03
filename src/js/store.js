'use strict';
console.log('store.js');

class Store2 {
  constructor(state) { // todo: call it state
    this.listeners = {};
    this.state = state; // todo: call it state
  }
  
  register(prop, cb) {
    if (!this.listeners[prop])
      this.listeners[prop] = [];
    
    this.listeners[prop].push(cb);
  }

  get(prop) {
    return JSON.parse(JSON.stringify(this.state[prop])); // return (deep) copy
  }

  set(prop, newVal) {
    this.state[prop] = newVal;
    for (let f of this.listeners[prop]) {
      f(newVal);
    }
  }
}

export default Store2;
