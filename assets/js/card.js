class Item extends HTMLElement {
  constructor() {
    super();
    this.qttyChanged = false;
    this.name = this.getAttribute('name');
    this.id = this.name+'Wrapper';
    this.price = this.getAttribute('price');
    this.imgSrc = this.getAttribute('imgSrc');
    this.qtty = this.getAttribute('qtty');
  }

  connectedCallback() {
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
    if (attrName === 'qtty') {
      if (this.qttyChanged == false) {
        this.qttyChanged = true;
        return;
      }

      let item = document.getElementById(this.name);
      //item.querySelector(".class").textContent = newVal; //doesn't work for some reason...
      item.children[3].textContent = newVal;
    }
  }
}
customElements.define('list-el', Item);
