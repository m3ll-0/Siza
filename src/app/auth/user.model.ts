export class User {
    constructor(
      private _accessToken: string,
      private _refreshToken: string,
    ) {}
  
    get accessToken() {
      return this.accessToken
    }

    get refreshToken() {
        return this.refreshToken
      }
  }
  