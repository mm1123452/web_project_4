export class UserInfo {
  constructor({name, job, id, avatar}) {
    this._nameSelector = document.querySelector(name)
    this._jobSelector = document.querySelector(job)
    this._avatarSelector = document.querySelector(avatar)

  }

  getUserInfo() {
   return {name: this._nameSelector.textContent, job: this._jobSelector.textContent}
  }


  setUserInfo({name, job, id, avatar}) {
    this._id = id

    if (name && job) {
      this._nameSelector.textContent = name
      this._jobSelector.textContent = job
    }

    if (avatar) {
      this._avatarSelector.style.backgroundImage = `url('${avatar}')`
    }
  }

}
