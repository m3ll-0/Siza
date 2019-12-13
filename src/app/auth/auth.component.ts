import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isClientLogin = false;
  error: string = null
  checked = true;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router)
  {
  }

  onSwitch() {
    this.isClientLogin = !this.isClientLogin
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
      }

      const email = form.value.email;
      const password = form.value.password;
      const stayLoggedIn = form.value.stayLoggedIn;

      this.isLoading = true;
      let authObs: Observable<AuthResponseData>;

      authObs = this.authService.login(email, password, stayLoggedIn);

      authObs.subscribe(
        resData => {
          this.isLoading = false;

          // Navigate after login
          this.router.navigate(['/sizasports'])
        },
        errorMessage => {
          this.error = errorMessage
          this.isLoading = false
        });

      form.reset();
    }    
}
