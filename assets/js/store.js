let store = {
  dataChangeListeners: [ ], // array of callbacks
  data: [ {name: 'benjerry', price: 5.95, qtty: 0},
          {name: 'caffelatte', price: 1.27, qtty: 0},
          {name: 'calippo', price: 4.10, qtty: 0},
          {name: 'evax', price: 2.40, qtty: 0},
          {name: 'pizza', price: 4.95, qtty: 0},
          {name: 'scottex', price: 4.50, qtty: 0},
          {name: 'spaghetti', price: 1.25, qtty: 0},
          {name: 'triangulos', price: 2.35, qtty: 0},
          {name: 'xibeca', price: 3.75, qtty: 0},
          {name: 'chipsahoy', price: 2.20, qtty: 0},
        ],

  // Change store.data according to action.
  change: (obj) => {
    let data = store.data;
    if (obj.action === 'addItem') {
      console.log('store: adding 1 ' + obj.itemName + ' to the basket');
      // change store.data
      let item = data.find((item)=> item.name === obj.itemName);
      item.qtty += 1;
    } else if (obj.action === 'removeItem') {
      console.log('store: removing 1 ' + obj.itemName + ' to the basket');
      // change store.data
      let item = data.find((item)=> item.name === obj.itemName);
      if (item.qtty > 0) {
        item.qtty -= 1;
      }
    }
    // Call each listener in dataListeners passing updated data and
    // the obj received
    for (f of store.dataChangeListeners) {
      f(data, obj);
    }
  },

  registerListener: (f) => { // Add callback function to dataListeners
    store.dataChangeListeners.push(f);
  }
};
// Example:
// store.change({action: 'addItem', item: 'pizza'}, (data) => {
//   console.log(data);
// });
