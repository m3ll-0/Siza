export class User {
    constructor(
      private accessToken: string,
      private refreshToken: string,
      private email: string,
      private isAdmin: boolean,
      private userId?: string
    ) {}
  
    get getAccessToken() {
      return this.accessToken
    }

    get getRefreshToken() {
        return this.refreshToken
      }

    get getEmail() {
      return this.email
    }

    get getIsAdmin() {
      return this.isAdmin
    }

    set getIsAdmin(bool: boolean) {
      this.isAdmin = bool
    }

    get getUserId() {
      return this.userId
    }
  
  }
