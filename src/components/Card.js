export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._text = data.name;
    this._imgLink = data.link;
    this._cardOwnerId = data.owner._id;
    this._userId = data.userId;
    this._cardId = data._id;
    this._likesCount = data.likes.length;
    this._likes = data.likes
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

    this._element.querySelector(".place").addEventListener("click", (e)=> {

      let data = null

      if (e.target.classList.contains('place__image')) {

          data = { image: this._imgLink, text: this._text}
          this._handleCardClick(data)

      } else if (e.target.classList.contains('place__icon') &&
          (e.target.classList.contains('place__icon_liked'))) {

          data ={cardId: this._cardId, method: 'delete'}

          this._handleCardClick(data)
          .then(likes =>  {
            this._setLikesCount(likes.length)
            likeIcon.classList.toggle("place__icon_liked");
          })

      } else if (e.target.classList.contains('place__icon')) {

        data ={cardId: this._cardId, method: 'put'}

        this._handleCardClick(data)
        .then(likes =>  {
          this._setLikesCount(likes.length)
          likeIcon.classList.toggle("place__icon_liked");
        })

      } else if (e.target.classList.contains('place__delete')) {

        data = {target: e.target,cardId:this._cardId , method:'confirm'}
        this._handleCardClick(data)
      }
    })
  }

  _setLikesCount(num) {
    this._likesElement.textContent = num
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners()

    if (this._cardOwnerId !== this._userId) {
      this._element.querySelector(".place__delete").classList.add("place__delete-hide")
    }

    this._element.querySelector('.place').dataset.cardId = this._cardId

    const image = this._element.querySelector(".place__image")
    image.src = this._imgLink;
    image.alt = this._text;

    this._element.querySelector(".place__name").textContent = this._text;

    this._likesElement = this._element.querySelector(".place__likes-count")
    this._setLikesCount(this._likesCount)

    //check if user previously liked the card
    const previousLike = this._likes.filter(like => like._id === this._userId)

    //set card to liked
    if (previousLike.length > 0) {
      this._element.querySelector(".place__icon").classList.add("place__icon_liked")
    }

    return this._element;
  }
}

