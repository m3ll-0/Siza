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
  id : String
  feedback
  isLoading = true
  loggedIn = false;

  constructor(
    private httpService: ApiServiceService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { 

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit() {
    this.loadFeedback()
  }

  loadFeedback(){
    this.httpService.getFeedbackByActivityId(this.id).subscribe(
      (data) =>{
        console.log('load')
        var feedbackData = []
        const length = data['feedback'].length
        data['feedback'].forEach(element => {
          this.httpService.getUserById(element.userId).subscribe(
            data => {
              feedbackData.push({usersEmail: data['user']['email'], feedback: element})
              if (feedbackData.length === length){
                this.feedback = feedbackData
                this.isLoading = false
                console.log('feedbackData')
                console.log(feedbackData)
              }              
            }
          )
        });
        
      }
    )
  }


  onPostFeedback(){
    this.httpService.postFeedbackByActivityId(this.id, "hoi").subscribe(
      data => {
        console.log(data)
        this.loadFeedback()
      }
    )
  }

  onSubmit(form: NgForm) {
    if (!this.loggedIn){
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '50%',
        height: '50%',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result.succes){
          this.loggedIn = true
          this.onSubmit
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
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {
  isClientLogin = false;
  error: string = null
  checked = true;
  isLoading = false;

  constructor(
    private authService: AuthService, private router: Router,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {}

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