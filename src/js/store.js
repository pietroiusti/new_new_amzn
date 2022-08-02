'use strict';

console.log('store.js');

class Store2 {
  constructor(properties) { // todo: call it state
    this.listeners = {};
    this.properties = properties; // todo: call it state
    console.log(this.properties);
  }
  
  register(prop, cb) {
    if (!this.listeners[prop])
      this.listeners[prop] = [];
    
    this.listeners[prop].push(cb);
  }

  get(prop) {
    return JSON.parse(JSON.stringify(this.properties[prop])); // return (deep) copy
  }

  set(prop, newVal) {
    this.properties[prop] = newVal;
    for (let f of this.listeners[prop]) {
      f(newVal);
    }
  }
}

export default Store2;
