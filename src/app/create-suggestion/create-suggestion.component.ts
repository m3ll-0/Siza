import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Suggestion } from '../models/Suggestion';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-create-suggestion',
  templateUrl: './create-suggestion.component.html',
  styleUrls: ['./create-suggestion.component.css']
})
export class CreateSuggestionComponent implements OnInit {

  user: User; 
  email: string;

  constructor(
    private location: Location, 
    private httpService: ApiServiceService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if(user !== null && user !== undefined) {
        this.user = user;
        this.email = user.email;
      }
    });
  }

  onGoBack() {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
        return;
    }
    const suggestion = new Suggestion()
    suggestion.activity = {}
    suggestion.activity.title = form.value.title;
    suggestion.message = form.value.message;
    suggestion.activity.goal = form.value.goal;
    suggestion.activity.material = form.value.material;
    suggestion.activity.activity = form.value.activity;
    suggestion.activity.tooHard = form.value.tooHard;
    suggestion.activity.tooEasy = form.value.tooEasy;
    suggestion.activity.setUp = form.value.setUp;
    suggestion.activity.duration = form.value.duration
    suggestion.activity.amountOfPeople = form.value.amountOfPeople
    suggestion.activity.wheelchair = form.value.wheelchair
    suggestion.activity.pointsForAttention= form.value.pointsForAttention 

    if(form.value.wheelchair === null || form.value.wheelchair === undefined || form.value.wheelchair === '') {
      suggestion.activity.wheelchair = false;
    }

    this.httpService.postSuggestion(suggestion).subscribe(
      data => {
        form.resetForm()
        this.onGoBack()
      }
    )
  }
}
