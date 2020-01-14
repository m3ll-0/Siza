import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { AuthService } from './auth.service'
import { catchError, retry, take, exhaustMap } from 'rxjs/operators'
import * as jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { User } from './user.model'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
 
        if (!user) {
          return next.handle(req)
        }

        if (this.isTokenExpired(user.accessToken)) {
          this.authService.refreshAccesToken();
        }

        const headers = req.headers
          // .set('Content-Type', 'application/json')
          .set('Authorization', user.accessToken)

        const modifiedRequest = req.clone({ headers })

        return next.handle(modifiedRequest)
      })
    )
  }
}
