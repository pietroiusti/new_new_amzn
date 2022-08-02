console.log('actionHandler.js');

import { store } from "./myamazon.js";

function actionHandler(obj) {
  let action = obj.action;
  let itemName = obj.itemName;
  
  if (action === 'add') {
    let data = store.get('data'); // get copy of data
    let item = data.find(item => item.name === itemName);
    item.qtty += 1;
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
