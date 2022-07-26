class Item extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
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
                ${this.price}
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
    //console.log(event.target.parentElement.id);  // => whole card
    //console.log(event.target); // => button
    const customEvent = new CustomEvent('addItem', { bubbles: true });
    event.target.dispatchEvent(customEvent);
  }

  handleClickRemove(event) {
    //console.log(event.target.parentElement.id); // => whole card
    //console.log(event.target); // => button
    const customEvent = new CustomEvent('removeItem', { bubbles: true });
    event.target.dispatchEvent(customEvent);
  }
}
customElements.define('list-el', Item);
