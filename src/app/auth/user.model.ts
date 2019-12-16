export class User {
    constructor(
      private _accessToken: string,
      private _refreshToken: string,
      private _isAdmin: Boolean
    ) {}
  
    get accessToken() {
      return this._accessToken
    }

    get refreshToken() {
        return this._refreshToken
      }

    get isAdmin() {
      return this._isAdmin
    }
  
  }
  