export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._text = data.name;
    this._imgLink = data.link
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    const likeIcon = this._element.querySelector(".place__icon")
    const deleteIcon = this._element.querySelector(".place__delete");
    const image = this._element.querySelector(".place__image");

    likeIcon.addEventListener("click", () => {
      likeIcon.classList.toggle("place__icon_liked");
    })

    deleteIcon.addEventListener("click", (evt) => {
      const parentElenment = evt.target.parentElement;
      parentElenment.remove();
    })

    image.addEventListener("click", () => {
      this._handleCardClick({image: this._imgLink, text: this._text})
    })
  }

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
