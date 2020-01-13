import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isClientLogin = false;
  error: string = null
  checked = false;
  isLoading = false;
  completed = false;
  email = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.authService.signUp(email, password).subscribe(
      resData => {
        this.isLoading = false;
        this.completed = true;
        this.error = null
        this.email = email
      },
      errorMessage => {
        this.error = errorMessage
        this.isLoading = false
      });
  }    
}
