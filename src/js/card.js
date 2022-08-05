console.log('card.js');

class Item extends HTMLElement {
  constructor() {
    super();
    this.connectedCallbackHasBeenCalled = false;
  }

  connectedCallback() {
    this.connectedCallbackHasBeenCalled = true;

    // todo: have a single attribute `props` or `data`, which is a
    // dictionary with the all properties

    this.props = {
      name: this.getAttribute('name'),
      id: this.name+'Wrapper',
      price: this.getAttribute('price'),
      imgSrc: this.getAttribute('imgSrc'),
      qtty: this.getAttribute('qtty'),
      qttyRef: null,
    };

    //     Tag representation of an item:
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
    let item = document.createElement('div');
    item.setAttribute('id', this.props.name);
    item.setAttribute('class', 'item');

    let name = document.createElement('div');
    name.setAttribute('class', this.props.name);
    let nameText = document.createTextNode(this.props.name);
    name.appendChild(nameText);
    item.appendChild(name);

    let price = document.createElement('div');
    price.setAttribute('class', 'price');
    let priceText = document.createTextNode(this.props.price);
    price.appendChild(priceText);
    item.appendChild(price);

    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'imgDiv');
    let img = document.createElement('img');
    img.setAttribute('src', this.props.imgSrc);
    imgDiv.appendChild(img);
    item.appendChild(imgDiv);

    let qtty = document.createElement('div');
    this.props.qttyRef = qtty;
    qtty.setAttribute('class', 'qtty');
    let qttyText = document.createTextNode(this.props.qtty);
    qtty.appendChild(qttyText);
    item.appendChild(qtty);

    let buttonRemove = document.createElement('button');
    buttonRemove.setAttribute('id', 'remove'+this.props.name+'Button');
    let buttonRemoveText = document.createTextNode('-');
    buttonRemove.appendChild(buttonRemoveText);
    buttonRemove.addEventListener('click', e => this.handleClickRemove(e));
    item.appendChild(buttonRemove);
    let buttonAdd = document.createElement('button');
    buttonAdd.setAttribute('id', 'add'+this.props.name+'Button');
    let buttonAddText = document.createTextNode('+');
    buttonAdd.appendChild(buttonAddText);
    buttonAdd.addEventListener('click', e => this.handleClickAdd(e));
    item.appendChild(buttonAdd);

    this.append(item);
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
    //console.log('Item attributeChangedCallback');
    if (!this.connectedCallbackHasBeenCalled) {
      return;
    }

    if (oldVal != newVal) {
      if (attrName === 'qtty') {
        this.props.qttyRef.textContent = newVal;
      }
    }
  }
}

customElements.define('list-el', Item);
