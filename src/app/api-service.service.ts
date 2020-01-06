import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Suggestion } from './models/Suggestion';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './auth/user.model';
import { Feedback } from './models/Feedback';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  url = 'https://siza-api.herokuapp.com/v1/'
  private API_SUGGESTIONS = 'suggestions'
  private API_AUTH = 'auth'
  private API_FEEDBACK = 'feedback'
  // url = 'http://127.0.0.1:3000/v1/';

  constructor(private httpClient: HttpClient) {
    
  } 

  public getCategories(){
    return this.httpClient.get(this.url + 'categories');
  }

  public getActivities(){
    return this.httpClient.get(this.url + 'activities');
  }

  public getSuggetionById(id){
    return this.httpClient.get<Suggestion>(`${this.url}${this.API_SUGGESTIONS}/${id}`)

    .pipe(
      catchError(this.handleError)
    )
  }

  public getUserById(id){
    return this.httpClient.get<User>(`${this.url}${this.API_AUTH}/${id}`)

    .pipe(
      catchError(this.handleError)
    )
  }

  public getCategoriesById(parentId: string)
  {
    return this.httpClient.get(this.url + 'categories/subs/' + parentId );
  }

  public getActivitiesById(categoryId: string)
  {
    return this.httpClient.get(this.url + 'activities/category/' + categoryId );
  }
  
  public getActivitiesFromCategory(categoryID){
    return this.httpClient.get(this.url +'activities/category/' + categoryID);
  }

  public getSpecificActivity(categoryID){
    return this.httpClient.get(this.url +'activities/' + categoryID);
  }

  public getFeedbackByActivityId(activityId){
    return this.httpClient.get<Feedback>(`${this.url}${this.API_FEEDBACK}/${activityId}`)

    .pipe(
      catchError(this.handleError)
    )
  }

  public postFeedbackByActivityId(activityId, message){
    return this.httpClient.post(`${this.url}${this.API_FEEDBACK}/${activityId}`, {
      'message' : message,
    })

    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
  
  public getCategoriesRecursively()
  {
    return this.httpClient.get(this.url + 'categories/recursively')
  }

  public getSpecificCategory(categoryID)
  {
    return this.httpClient.get(this.url + 'categories/' + categoryID)
  }
}
