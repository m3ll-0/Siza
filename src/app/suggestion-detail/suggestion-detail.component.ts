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
  private id: String
  usersEmail: String
  suggestion: Suggestion

  constructor(
    private location: Location, 
    private httpService: ApiServiceService,
    private activatedRoute: ActivatedRoute,) {
        this.activatedRoute.params.subscribe(params => {
          this.id = params['id']
        })
    }

  ngOnInit() {
    this.httpService.getSuggetionById(this.id).subscribe(
      data => {
        this.suggestion = data['suggestion']
        console.log(this.suggestion)
        console.log(this.suggestion.userId)
        this.httpService.getUserById(this.suggestion.userId).subscribe(
          userData => {
            this.usersEmail = userData['user']['email']
          }
        )
      }
    )
  }

  onGoBack(){
    this.location.back();
  }

  

}
