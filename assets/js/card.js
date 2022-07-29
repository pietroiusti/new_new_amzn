// #########################################################
// This file assumes the existence of a `store` global variable
// #########################################################

class Item extends HTMLElement {
  constructor() {
    super();
    this.connectedCallbackHasBeenCalled = false;
    this.name = this.getAttribute('name');
    this.id = this.name+'Wrapper';
    this.price = this.getAttribute('price');
    this.imgSrc = this.getAttribute('imgSrc');
    this.qtty = this.getAttribute('qtty');
  }

  connectedCallback() {
    this.connectedCallbackHasBeenCalled = true;
    this.innerHTML = `
        <div id="${this.name}" class="item">
            <div class="name">
                ${this.name}
            </div>
            <div class="price">
                $ ${this.price}
            </div>
            <div class="imgDiv">
                <img src="${this.imgSrc}">
            </div>
            <div class="qtty">
                ${this.qtty}
            </div>
            <button id="remove${this.name}Button">-</button>
            <button id="add${this.name}Button">+</button>
        </div>
    `;

    document.getElementById(`add${this.name}Button`)
      .addEventListener('click', (event) => {
        this.handleClickAdd(event);
      });

    document.getElementById(`remove${this.name}Button`)
      .addEventListener('click', (event) => {
        this.handleClickRemove(event);
      });
  }

  handleClickAdd(event) {
    //event.target => button
    const customEvent = new CustomEvent('addItem', { bubbles: true });
    event.target.dispatchEvent(customEvent);
  }

  handleClickRemove(event) {
    //event.target => button
    const customEvent = new CustomEvent('removeItem', { bubbles: true });
    event.target.dispatchEvent(customEvent);
  }

  static get observedAttributes() {
    return ['qtty', ];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (!this.connectedCallbackHasBeenCalled)
      return;

    if (attrName === 'qtty') {
      let item = document.getElementById(this.name);
      item.children[3].textContent = newVal;
    }
  }
}

customElements.define('list-el', Item);

store.registerListener(listElCallback);

function listElCallback(data, obj) {
  let listEl = document.getElementById(obj.itemName).parentElement;
  let updatedQtty = data.find(item => item.name === obj.itemName).qtty;
  listEl.setAttribute('qtty', updatedQtty);
}

