export class User {
    constructor(
      private _accessToken: string,
      private _refreshToken: string,
      private _email: string,
      private _isAdmin: boolean,
      private _userId?: string
    ) {}
  
    get accessToken() {
      return this._accessToken
    }

    get refreshToken() {
        return this._refreshToken
      }

    get email() {
      return this._email
    }

    get isAdmin() {
      return this._isAdmin
    }

    set isAdmin(bool: boolean) {
      this._isAdmin = bool
    }

    get userId() {
      return this._userId
    }
  
  }
