import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private API_ADMIN_BASE_URL = 'https://siza-api.herokuapp.com/v1/admin';
  private API_USERS_URL = '/users';
  private API_ADMINS_URL = '/admins';
  private API_SUGGESTIONS_URL = '/suggestions';
  private API_READ_URL = '/read';
  
  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    return this.http.get(`${this.API_ADMIN_BASE_URL}${this.API_USERS_URL}`)
  }

  getUserById(id: string) {
    return this.http.get(`${this.API_ADMIN_BASE_URL}${this.API_USERS_URL}/${id}`)
  }
 
  getAdmins() {
    return this.http.get(`${this.API_ADMIN_BASE_URL}${this.API_ADMINS_URL}`)
  }

  getSuggestions() {
    return this.http.get(`${this.API_ADMIN_BASE_URL}${this.API_SUGGESTIONS_URL}`)
  }

  setRead(id: string, read: boolean) {
    return this.http.put(`${this.API_ADMIN_BASE_URL}${this.API_SUGGESTIONS_URL}/${id}${this.API_READ_URL}/${read}`, null)
  }

  setAdmin(id: string, bool: boolean) {
    return this.http.post(`${this.API_ADMIN_BASE_URL}/${id}/${bool}`, null)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
}
