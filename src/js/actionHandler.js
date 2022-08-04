console.log('actionHandler.js');

import { store } from "./myamazon.js";
import _ from 'lodash';

function actionHandler(obj) {
  let action = obj.action;
  let itemName = obj.itemName;
  
  if (action === 'add') {
    let data = store.get('data');

    let index; // you could also use find
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === itemName) {
        index = i;
      }
    }
    
    //console.log('old data:');
    //console.log(data); //<<<<<<< updated??? why?

    let dataShallowCopy = [...data]; // create a new array, with the
                                     // same references that are
                                     // inside data.
    // The modified shallow copy will be passed to the store. We do
    // so, because other components can check whether data has changed
    // just by comparing the references.
    dataShallowCopy[index] = _.cloneDeep(dataShallowCopy[index]); // change
                                                                  // one
                                                                  // of
                                                                  // the
                                                                  // references
                                                                  // (make
                                                                  // it
                                                                  // point
                                                                  // to
                                                                  // a
                                                                  // copy)
    data[index].qtty += 1; // update the copy
    store.set('data', data); // use the copy to update data in store
  } else if (action === 'remove') {
    let data = store.get('data'); // get copy of data
    let item = data.find(item => item.name === itemName);
    // clone here as well...
    if (item.qtty > 0) {
      item.qtty -= 1;
      store.set('data', data);
    }
  } else {
    console.log('Error: Action unknown.');
  }
}

export { actionHandler };
