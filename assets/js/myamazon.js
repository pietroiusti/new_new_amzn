// #########################################################
// This file assumes the existence of a global variable called {...} storing {...}
// #########################################################

data = store.data;

let componentsArray = []; // When a component is created is added here

function handleDataChange(newData) {
  //console.log('I should handle the change in data');
  //console.log(newData);

  // loop over components in componentsArray to update the relevant component
  for (let i = 0; i < componentsArray.length; i++) {
    //console.log(componentsArray[i]);// + 'should be updated if needed');
    let component = componentsArray[i];

    if (component.tagName == 'BASKET-EL') {
      console.log(component.tagName);

      let totalNumber = newData.reduce((acc, a) => acc + a.qtty, 0);
      let totalPrice = newData.reduce((acc, a) => acc + a.qtty*a.price, 0);
      totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

      //let basketEl = document.getElementsByTagName('basket-el')[0];
      //console.log(basketEl);
      //console.log("changing attributes of basket...")

      component.setAttribute('items', totalNumber);
      component.setAttribute('price', totalPrice);
    } else if (component.tagName == 'LIST-EL') {
      console.log(component.tagName);
    }


    // let componentsAttributes = component.getAttributeNames();
    // console.log('component:')
    // console.log(component)
    // console.log('componentsAttributes:');
    // console.log(componentsAttributes);
  }
}

// Make list of items (cards) listen to the custom events ('addItem'
// and 'removeItem') emitted by the buttons.
let itemList = document.getElementById('itemList');
itemList.addEventListener('addItem', (e)=>{
  //console.log(e);
  let parent = e.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);

  //item.qtty += 1; // <======================================== this is
                  // a change in state that is now be performed
                  // through a call to store.change().
  store.change({action: 'addItem', itemName: name}, handleDataChange); // TESTING

  let qtty = Number(parent.querySelector('.qtty').textContent);

  // update card and basket
  let customWrapper = parent.parentElement;
  customWrapper.setAttribute('qtty', item.qtty);
  // updateBasket(); // TESTING: NOW HANDLED BY STORE?
});
itemList.addEventListener('removeItem', (e)=>{
  //console.log(e);
  let parent = event.target.parentElement;
  let name = parent.id;
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    //item.qtty -= 1; // <======================================== this is
                  // a change in state that is now be performed
                  // through a call to store.change().
    store.change({action: 'removeItem', itemName: name}, handleDataChange); // TESTING

    let qtty = Number(parent.querySelector('.qtty').textContent);
    let customWrapper = parent.parentElement;
    customWrapper.setAttribute('qtty', item.qtty);
  }

  //updateBasket() // TESTING: NOW HANDLED BY STORE?
});

function renderBasket() {
  let basketDiv = document.getElementById('basketDiv');
  let basket = document.createElement('basket-el');
  componentsArray.push(basket); // <=================================
  basketDiv.appendChild(basket);
}

function render_list_of_items() {
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let item = document.createElement('list-el');
    componentsArray.push(item); // <=================================
    item.setAttribute('name', name);
    item.setAttribute('price', data[i].price);
    item.setAttribute('imgSrc', `./assets/img/${name}.jpg`);
    item.setAttribute('qtty', data[i].qtty);
    itemList.appendChild(item);
  }
}

function updateBasket() {
  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);
  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places

  //console.log(totalNumber);
  //console.log(totalPrice);

  let basketEl = document.getElementsByTagName('basket-el')[0];
  //console.log(basketEl);
  //console.log("changing attributes of basket...")

  basketEl.setAttribute('items', totalNumber);
  basketEl.setAttribute('price', totalPrice);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

(function init() {
  renderBasket();
  render_list_of_items();
})();
