import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isClientLogin = false;
  error: string = null

  onSwitch() {
    this.isClientLogin = !this.isClientLogin
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
      }
    }
}
