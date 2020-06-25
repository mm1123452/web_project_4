export class UserInfo {
  constructor({name, job}) {
    this._nameSelector = document.querySelector(name)
    this._jobSelector = document.querySelector(job)
    //Take an object with the selectors of two elements into the constructor:
    //one containing the user's name, and another containing the user's job.
  }

  getUserInfo() {
   //Store a public method named getUserInfo(), which returns an object with information about the user.
   /// This method will be handy for cases when it's necessary to display the user data in the open form.
   return {name: this._nameSelector.textContent, job: this._jobSelector.textContent}

  }

  setUserInfo({name, job}) {
    //Store a public method named setUserInfo(),
    // which takes new user data and adds it on the page.
    this._nameSelector.textContent = name
    this._jobSelector.textContent = job
  }

}
