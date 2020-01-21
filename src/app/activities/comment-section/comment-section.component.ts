import { Component, OnInit, Inject } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService, AuthResponseData } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  id: string
  feedback
  isLoading = true
  loggedIn = false;

  constructor(
    private httpService: ApiServiceService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { 

    this.activatedRoute.params.subscribe(params => {
      const key = 'id'; 
      this.id = params[key];
    })
  }

  ngOnInit() {
    this.loadFeedback()
  }

  loadFeedback() {
    this.httpService.getFeedbackByActivityId(this.id).subscribe(
      (data) => {
        const feedbackKey = 'feedback';
        const feedbackData = []
        const length = data[feedbackKey].length

        data[feedbackKey].forEach(element => {
          this.httpService.getUserById(element.userId).subscribe(
            odata => {
              const userKey = 'user';
              const emailKey = 'email';

              feedbackData.push({usersEmail: odata[userKey][emailKey], feedback: element})
              if (feedbackData.length === length) {
                this.feedback = feedbackData
                this.isLoading = false
              }              
            }
          )
        });
        
      }
    )
  }

  onPostFeedback() {
    this.httpService.postFeedbackByActivityId(this.id, 'hoi').subscribe(
      data => {
        console.log(data)
        this.loadFeedback()
      }
    )
  }

  onSubmit(form: NgForm) {
    if (!this.loggedIn) {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
        width: '50%',
        height: '50%',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result.succes) {
          this.loggedIn = true
        } else {
          return;
        }
      });
    }

    if (!form.valid || !this.loggedIn) {
      return
    }

    this.isLoading = true;
    const message = form.value.message;
    this.httpService.postFeedbackByActivityId(this.id, message).subscribe(
      data => {
        form.resetForm()
        this.isLoading = false
        console.log(data)
        this.loadFeedback()
      }
    )
  }
}



@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'app-dialog.html',
})
export class DialogOverviewExampleDialogComponent {
  isClientLogin = false;
  error: string = null
  checked = true;
  isLoading = false;

  constructor(
    private authService: AuthService, private router: Router,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {animal: string;
      name: string;}) {}

      onSubmitLogin(form: NgForm) {
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
              this.dialogRef.close({ succes: true });

            },
            errorMessage => {
              this.error = errorMessage
              this.isLoading = false
            });


        }    

} 
