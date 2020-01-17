import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiServiceService } from '../api-service.service';
import { Suggestion } from '../models/Suggestion';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-detail', 
  templateUrl: './suggestion-detail.component.html',
  styleUrls: ['./suggestion-detail.component.css']
})
export class SuggestionDetailComponent implements OnInit {
  private id: string
  usersEmail: string
  suggestion: any

  constructor(
    private location: Location,
    private router: Router,
    private httpService: ApiServiceService,
    private activatedRoute: ActivatedRoute,) {
        this.activatedRoute.params.subscribe(params => {
          const key = 'id';
          this.id = params[key];
        })
    }

  ngOnInit() {
    this.httpService.getSuggetionById(this.id).subscribe(
      data => {
        const suggestionsKey = 'suggestion'
        this.suggestion = data[suggestionsKey]
        console.log(this.suggestion)
        console.log(this.suggestion.userId)
        this.httpService.getUserById(this.suggestion.userId).subscribe(
          userData => {
            const userKey = 'user';
            const emailKey = 'email';
            this.usersEmail = userData[userKey][emailKey]
          }
        )
      }
    )
  }

  onGoBack() {
    this.location.back();
  }

  onClickCreateSuggestion() {
    this.router.navigate(['/admin/addactivity', { suggestionId:  this.suggestion._id}])
  }
}
