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
  private API_BASE_URL = "https://siza-api.herokuapp.com/v1/admin";
  private API_USERS_URL = "/users";
  private API_ADMINS_URL = "/admins";
  
  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    return this.http.get(`${this.API_BASE_URL}${this.API_USERS_URL}`)
  }

  getAdmins() {
    return this.http.get(`${this.API_BASE_URL}${this.API_ADMINS_URL}`)
  }

  setAdmin(id: string, bool: boolean) {
    return this.http.post(`${this.API_BASE_URL}/${id}/${bool}`, null).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
}
