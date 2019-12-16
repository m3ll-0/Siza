import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators'
import { throwError, Subject, BehaviorSubject } from 'rxjs'
import { User } from './user.model'
import { Router } from '@angular/router'

export interface AuthResponseData {
    accessToken: string,
    refreshToken: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {

private API_BASE_URL = "https://siza-api.herokuapp.com/v1";
private API_URL_REGISTER_ADMIN = "/auth/login"
private API_URL_SIGNUP = "/auth/signup"

  user = new BehaviorSubject<User>(null)

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
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
            resData.accessToken
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

  autoLogin() {
    const userData: {
        accessToken: string,
        refreshToken: string
    } = JSON.parse(localStorage.getItem('userData'))

    if (!userData) {
      return
    }

    const loadedUser = new User(
      userData.accessToken,
      userData.refreshToken,
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
        accessToken: string
  ) {
    const user = new User(refreshToken, accessToken)
    this.user.next(user)

    // Add to local storage
    localStorage.setItem('userData', JSON.stringify(user))
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
}
