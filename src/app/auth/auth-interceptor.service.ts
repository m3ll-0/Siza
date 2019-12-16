import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { AuthService } from './auth.service'
import { catchError, retry, take, exhaustMap } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {

        if (!user) {
          return next.handle(req)
        }

        const headers = req.headers
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + user.accessToken)

        const modifiedRequest = req.clone({ headers })

        return next.handle(modifiedRequest)
      })
    )
  }
}
