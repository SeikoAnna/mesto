export class UserInfo {
  constructor({ userNameSelector, userInfoSelector, avatarInfoSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
    this._avatarInfo = document.querySelector(avatarInfoSelector)
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
  }

  setUserInfo(name, info) {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }

  setUserAvatar (link) {
    this._avatarInfo.src = link
  }
}
