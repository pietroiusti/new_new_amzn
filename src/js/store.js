'use strict';

console.log('store.js');

class Store2 {
  constructor(listeners, properties) {
    this.listeners = listeners;
    this.properties = properties;
    console.log(this.properties);
  }
  
  register(prop, cb) {
    if (!this.listeners[prop])
      this.listeners[prop] = [];
    
    this.listeners[prop].push(cb);
  }

  get(prop) {
    return this.properties[prop].slice(); // return copy
  }

  set(prop, newVal) {
    this.properties[prop] = newVal;
    for (let f of this.listeners[prop]) {
      f(newVal);
    }
  }
}

export default Store2;
