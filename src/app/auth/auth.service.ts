import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators'
import { throwError, Subject, BehaviorSubject } from 'rxjs'
import { User } from './user.model'
import { Router } from '@angular/router'

export interface AuthResponseData {
    accesToken: string,
    refreshToken: string,
    user: User
}

@Injectable({ providedIn: 'root' })
export class AuthService {

private API_BASE_URL = 'https://siza-api.herokuapp.com/v1';
private API_URL_REGISTER_ADMIN = '/auth/login'
private API_URL_SIGNUP = '/auth/signup'


  user = new BehaviorSubject<User>(null)

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string, stayLoggedIn = true) {
    return this.http
      .post<AuthResponseData>(` ${this.API_BASE_URL + this.API_URL_REGISTER_ADMIN} `, {
        email,
        password
      })

      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.refreshToken,
            resData.accesToken,
            resData.user.isAdmin,
            resData.user.email,
            stayLoggedIn
          )
        })
      )
  }

  signUp(email: string, password: string) {
    return this.http
      .post(`${this.API_BASE_URL}${this.API_URL_SIGNUP}`, {
        email,
        password
      })

      .pipe(
        catchError(this.handleError)
      )
      
  }

  verifyEmail(token: string) {
    return this.http.post(`${this.API_BASE_URL}/auth/confirmation/${token}`, {})

    .pipe(
      catchError(this.handleError)
    )
  }

  refreshAccesToken() {
    const userData: {
      _accessToken: string,
      _refreshToken: string,
      _isAmdin: boolean,
      _email: string,
    } = JSON.parse(localStorage.getItem('userData'))

    return this.http.post(`${this.API_BASE_URL}/auth/refreshtoken`, {
      refreshToken : userData._refreshToken,
      email : userData._email,

    })

    .pipe(
      catchError(this.handleError)
    )

    .subscribe(
      data => {
        const refreshTokenKey = 'refreshToken';
        this.handleAuthentication(
          data[refreshTokenKey],
          userData._accessToken,
          userData._isAmdin,
          userData._email,
          true)
      }
    )
}

  autoLogin() {
    const userData: {
        _accessToken: string,
        _refreshToken: string,
        _isAmdin: boolean,
        _email: string,
    } = JSON.parse(localStorage.getItem('userData'))

    if (!userData) {
      return
    }
    
    const isAdminKey = '_isAdmin';

    const loadedUser = new User(
      userData._accessToken,
      userData._refreshToken,
      userData._email,
      userData[isAdminKey],
    )

    if (loadedUser.accessToken) {
      this.user.next(loadedUser)
    }
  }

  logout() {
    localStorage.removeItem('userData')
    this.user.next(null)
    this.router.navigate(['/auth'])
  }

  private handleAuthentication(
        refreshToken: string,
        accessToken: string,
        isAdmin: boolean,
        email: string,
        stayLoggedIn: boolean
  ) {

    const user = new User(accessToken, refreshToken, email, isAdmin)
    this.user.next(user)

    if(stayLoggedIn) {
      // Add to local storage
      localStorage.setItem('userData', JSON.stringify(user))
    }
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
}
