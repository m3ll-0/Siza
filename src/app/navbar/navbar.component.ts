import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public isAuthenticated = false
  isAdmin: Boolean
  isNavbarCollapsed = true
  private userSub: Subscription
  @Input() title: string


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user
      console.log(user)
      this.isAdmin = user.isAdmin
    })
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    if (this.userSub !== undefined) {
      this.userSub.unsubscribe()
    }
  }
}
