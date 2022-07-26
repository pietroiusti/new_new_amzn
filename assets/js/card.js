class Item extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let name = this.getAttribute('name');
    let price = this.getAttribute('price');
    let imgSrc = this.getAttribute('imgSrc');
    let qtty = this.getAttribute('qtty');

    this.innerHTML = `
        <div id="${name}" class="item">
            <div class="name">
                ${name}
            </div>
            <div class="price">
                ${price}
            </div>
            <div class="imgDiv">
                <img src="${imgSrc}">
            </div>
            <div class="qtty">
                ${qtty}
            </div>
            <button id="remove${name}Button">-</button>
            <button id="add${name}Button">+</button>
        </div>
    `;

    document.getElementById(`add${name}Button`)
      .addEventListener('click', (event) => {
        this.handleClickAdd(event);
      });

    document.getElementById(`remove${name}Button`)
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
