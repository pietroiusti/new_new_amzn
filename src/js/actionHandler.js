console.log('actionHandler.js');

import { store } from "./myamazon.js";
import _ from 'lodash';

function actionHandler(obj) {
  let action = obj.action;
  let itemName = obj.itemName;
  
  if (action === 'add') {
    let data = store.get('data');

    // todo: get real value not copy

    // let item = ...
    // create new ref of item
    // e.g.:..
    // can be a shallow copy... 
    //pass data back with only one reference changed.

    let index;
    //get index
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === itemName) {
        index = i;
      }
    }
    
    console.log('old data:');
    console.log(data); //<<<<<<< updated??? why?

    data[index] = _.cloneDeep(data[index]); // change ref

    //let item = data.find(item => item.name === itemName);
    //item.qtty += 1;
    //store.set('data', data);

    data[index].qtty += 1;

    console.log('updated data:');
    console.log(data);
    
    store.set('data', data);
  } else if (action === 'remove') {
    let data = store.get('data'); // get copy of data
    let item = data.find(item => item.name === itemName);
    if (item.qtty > 0) {
      item.qtty -= 1;
      store.set('data', data);
    }
  } else {
    console.log('Error: Action unknown.');
  }
}

export { actionHandler };
