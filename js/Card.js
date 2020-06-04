export class Card {
  constructor(data, cardSelector) {
    this._text = data.name;
    this._imgLink = data.link
    this._cardSelector = cardSelector;
  }

  //It has private methods for working with markup and adding event listeners.
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
     // .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    const likeIcon = this._element.querySelector(".place__icon")

    likeIcon.addEventListener("click", () => {
      likeIcon.classList.toggle("place__icon_liked");
    })
    // this._element.querySelector(".place__delete");



    //   this._element.addEventListener('click', () => {
    //     this._handleOpenPopup()
    //   })

    //   popupCloseButton.addEventListener('click', () => {
    //     this._handleClosePopup()
    //   })
  }

  //It has private methods for each event handler.

  //It has one public method that returns a fully functional card element populated with data.
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()

    const image = this._element.querySelector(".place__image")
    image.src = this._imgLink;
    image.alt = this._text;


    this._element.querySelector(".place__name").textContent = this._text;

    return this._element;
  }
}
