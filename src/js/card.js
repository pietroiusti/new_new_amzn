console.log('card.js');

class Item extends HTMLElement {
  constructor() {
    super();
    this.connectedCallbackHasBeenCalled = false;
    // this.name = this.getAttribute('name');
    // this.id = this.name+'Wrapper';
    // this.price = this.getAttribute('price');
    // this.imgSrc = this.getAttribute('imgSrc');
    // this.qtty = this.getAttribute('qtty');
  }

  connectedCallback() {
    this.connectedCallbackHasBeenCalled = true;

    this.name = this.getAttribute('name');
    this.id = this.name+'Wrapper';
    this.price = this.getAttribute('price');
    this.imgSrc = this.getAttribute('imgSrc');
    this.qtty = this.getAttribute('qtty');
    
    // OLD:
    // this.innerHTML = `
    //     <div id="${this.name}" class="item">
    //         <div class="name">
    //             ${this.name}
    //         </div>
    //         <div class="price">
    //             $ ${this.price}
    //         </div>
    //         <div class="imgDiv">
    //             <img src="${this.imgSrc}">
    //         </div>
    //         <div class="qtty">
    //             ${this.qtty}
    //         </div>
    //         <button id="remove${this.name}Button">-</button>
    //         <button id="add${this.name}Button">+</button>
    //     </div>
    // `;
    // USE DOM MANIPULATION INSTEAD:
    let item = document.createElement('div');
    item.setAttribute('id', this.name);
    item.setAttribute('class', 'item');

    let name = document.createElement('div');
    name.setAttribute('class', this.name);
    let nameText = document.createTextNode(this.name);
    name.appendChild(nameText);
    item.appendChild(name);

    let price = document.createElement('div');
    price.setAttribute('class', 'price');
    let priceText = document.createTextNode(this.price);
    price.appendChild(priceText);
    item.appendChild(price);

    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'imgDiv');
    let img = document.createElement('img');
    img.setAttribute('src', this.imgSrc);
    imgDiv.appendChild(img);
    item.appendChild(imgDiv);

    let qtty = document.createElement('div');
    qtty.setAttribute('class', 'qtty');
    let qttyText = document.createTextNode(this.qtty);
    qtty.appendChild(qttyText);
    item.appendChild(qtty);

    let buttonRemove = document.createElement('button');
    buttonRemove.setAttribute('id', 'remove'+this.name+'Button');
    let buttonRemoveText = document.createTextNode('-');
    buttonRemove.appendChild(buttonRemoveText);
    buttonRemove.addEventListener('click', e => this.handleClickRemove(e));
    item.appendChild(buttonRemove);
    let buttonAdd = document.createElement('button');
    buttonAdd.setAttribute('id', 'add'+this.name+'Button');
    let buttonAddText = document.createTextNode('+');
    buttonAdd.appendChild(buttonAddText);
    buttonAdd.addEventListener('click', e => this.handleClickAdd(e));
    item.appendChild(buttonAdd);

    this.append(item);
  }

  handleClickAdd(event) {
    //event.target => button
    console.log('button');
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
