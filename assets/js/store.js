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
  {name: 'chipsahoy', price: 2.20, qtty: 0}
];

let store = {
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
  // Change data according to action.
  // cb can be passed to act upon the new state.
  change: (obj, cb) => {
    let data = store.data;
    if (obj.action === 'addItem') {
      console.log('store: I should add 1 ' + obj.itemName + ' to the basket');
      // change store.data      
      let item = data.find((item)=> item.name === obj.itemName);
      item.qtty += 1;
    } else if (obj.action === 'removeItem') {
      console.log('store: I should remove 1' + obj.itemName + ' to the basket');
      // change store.data
      let item = data.find((item)=> item.name === obj.itemName);
      if (item.qtty > 0) {
        item.qtty -= 1;
      }
    }
    
    // handle change in data
    cb(data);
  },
};

// Example:
// store.change({action: 'addItem', item: 'pizza'}, (data) => {
//   console.log(data);
// });