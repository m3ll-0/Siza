import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  isLoading = true;
  error = null;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.verify(params['token'])
    })
    
  }

  

  ngOnInit() {
  }

  verify(token : string) {
    this.authService.verifyEmail(token).subscribe(
      resData => {
        this.router.navigate([`/auth`])
      },
      errorMessage => {
        this.error = errorMessage
        this.isLoading = false
      }
    );
  }

}
