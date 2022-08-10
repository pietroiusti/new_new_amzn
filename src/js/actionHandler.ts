console.log('actionHandler.ts');

import { store } from "./myamazon";
import _ from 'lodash';

function actionHandler(obj: { action: string; itemName: string; }): void {
  let action = obj.action;
  let itemName = obj.itemName;
  
  if (action === 'add') {
    let data = store.get('data');

    let index: number; // CHECK: could you also .find() as well?
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
    let data = store.get('data');

    let index: number; // CHECK: could you also .find() as well?
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === itemName) {
        index = i;
      }
    }

    if (data[index].qtty > 0) {
      let dataShallowCopy = [...data];
      dataShallowCopy[index] = _.cloneDeep(dataShallowCopy[index]);
      dataShallowCopy[index].qtty -= 1;
      store.set('data', dataShallowCopy);
    }
  } else {
    console.log('Error: Action unknown.');
  }
}

export { actionHandler };
