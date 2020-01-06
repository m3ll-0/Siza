import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  private id : String
  feedback
  isLoading = true

  constructor(
    private httpService: ApiServiceService,
    private activatedRoute: ActivatedRoute,
    
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
    if (!form.valid) {
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
