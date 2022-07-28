// #########################################################
// This file assumes the existence of a `store` global variable
// #########################################################

data = store.data;
/*
let componentsArray = []; // When a component is created is added here

function handleDataChange(newData) {
  // loop over components in componentsArray to update the relevant components
  for (let i = 0; i < componentsArray.length; i++) {
    let component = componentsArray[i];

    if (component.tagName == 'BASKET-EL') {
      // let totalNumber = newData.reduce((acc, a) => acc + a.qtty, 0);
      // let totalPrice = newData.reduce((acc, a) => acc + a.qtty*a.price, 0);
      // totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

      // component.setAttribute('items', totalNumber);
      // component.setAttribute('price', totalPrice);
    } else if (component.tagName == 'LIST-EL') {
      //let item = newData.find((item) => item.name === component.name); // NOW
      //component.setAttribute('qtty', item.qtty);                       // USING REGISTERED LISTENERS!
    }
  }
}
*/

// Make list of items (cards) listen to the custom events ('addItem'
// and 'removeItem') emitted by the buttons.
let itemList = document.getElementById('itemList');
itemList.addEventListener('addItem', (e)=>{
  let parent = e.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);

  //store.change({action: 'addItem', itemName: name}, handleDataChange);
  store.change({action: 'addItem', itemName: name});
});

itemList.addEventListener('removeItem', (e)=>{
  let parent = event.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    //store.change({action: 'removeItem', itemName: name}, handleDataChange);
    store.change({action: 'removeItem', itemName: name});
  }
});

function renderBasket() {
  let basketDiv = document.getElementById('basketDiv');
  let basket = document.createElement('basket-el');
  //componentsArray.push(basket);
  basketDiv.appendChild(basket);
}

function render_list_of_items() {
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let item = document.createElement('list-el');
    //componentsArray.push(item);
    item.setAttribute('name', name);
    item.setAttribute('price', data[i].price);
    item.setAttribute('imgSrc', `./assets/img/${name}.jpg`);
    item.setAttribute('qtty', data[i].qtty);
    itemList.appendChild(item);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

(function init() {
  renderBasket();
  render_list_of_items();
})();
