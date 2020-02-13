import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Suggestion } from './models/Suggestion';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './auth/user.model';
import { Feedback } from './models/Feedback';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  public getCategories() {
    return this.httpClient.get(this.url + 'categories');
  }

  public getActivities() {
    return this.httpClient.get(this.url + 'activities');
  }

  public getSuggetionById(id) {
    return this.httpClient.get<Suggestion>(`${this.url}${this.API_SUGGESTIONS}/${id}`)

    .pipe(
      catchError(this.handleError)
    )
  }

  public postSuggestion(suggestion: Suggestion) {
    return this.httpClient.post(`${this.url}${this.API_SUGGESTIONS}`, {
      message : suggestion.message,
      activity : {
        title : suggestion.activity.title,
        goal : suggestion.activity.goal,
        activity : suggestion.activity.activity,
        material : suggestion.activity.material,
        tooEasy : suggestion.activity.tooEasy,
        tooHard : suggestion.activity.tooHard,
        setUp : suggestion.activity.setUp,
        duration : suggestion.activity.duration,
        wheelchair : suggestion.activity.wheelchair,
        amountOfPeople : suggestion.activity.amountOfPeople,
        pointsForAttention : suggestion.activity.pointsForAttention,

      },
    })

    .pipe(
      catchError(this.handleError)
    )
  }

  public getUserById(id) {
    return this.httpClient.get<User>(`${this.url}${this.API_AUTH}/${id}`)

    .pipe(
      catchError(this.handleError)
    )
  }

  public getCategoriesById(parentId: string) {
    return this.httpClient.get(this.url + 'categories/subs/' + parentId );
  }

  public getActivitiesById(categoryId: string) {
    return this.httpClient.get(this.url + 'activities/category/' + categoryId );
  }

  public getActivitiesFromCategory(categoryID) {
    return this.httpClient.get(this.url +'activities/category/' + categoryID);
  }
  
  public getActivitiesFromCategoryFiltered(categoryID, wheelchair: boolean, minDuration: number, maxDuration: number, 
    minAmountOfPeople: number, maxAmountOfPeople: number) {

    let url = this.url +'activities/category/' + categoryID + '?'
    if (wheelchair) {
      url = url + 'wheelchair=' + wheelchair
    }
    if (minDuration && maxDuration) {
      if (wheelchair) {
        url = url +  '&' 
      }
      url = url + 'minDuration=' + minDuration + '&maxDuration=' + maxDuration
    }
    if (minAmountOfPeople && maxAmountOfPeople) {
      if (minDuration && maxDuration || wheelchair) {
        url = url +  '&' 
      }
      url = url + 'minAmountOfPeople=' + minAmountOfPeople + '&maxAmountOfPeople=' + maxAmountOfPeople
    }
    console.log(url)
    return this.httpClient.get(url);
  }

  public getSpecificActivity(categoryID) {
    return this.httpClient.get(this.url +'activities/' + categoryID);
  }

  public getFeedbackByActivityId(activityId) {
    return this.httpClient.get<Feedback>(`${this.url}${this.API_FEEDBACK}/${activityId}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  public postFeedbackByActivityId(activityId, message) {
    return this.httpClient.post(`${this.url}${this.API_FEEDBACK}/${activityId}`, {
      message,
    })
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
  
  public getCategoriesRecursively() {
    return this.httpClient.get(this.url + 'categories/recursively')
  }

  public getCategoriesWithoutParent() {
    return this.httpClient.get(this.url + 'categories/noParent')
  }

  public getSpecificCategory(categoryID) {
    return this.httpClient.get(this.url + 'categories/' + categoryID)
  }

  public getSpecificCategoryParentName(categoryID) {
    return this.httpClient.get(this.url + 'categories/getParentName/' + categoryID)
  }

  public getCategoriesParentName() {
    return this.httpClient.get(this.url + 'categories/getParentName')
  }

  public getCategoriesWithoutSub(categoryID) {
    return this.httpClient.get(this.url + 'categories/withoutsub/' + categoryID)
  }

  public updateSpecificCategory(categoryID, categoryprops) {
    return this.httpClient.put(this.url + 'admin/categories/' + categoryID, categoryprops)
  }

  public createCategory(categoryprops) {
    return this.httpClient.post(this.url + 'admin/categories', categoryprops)
  }

  public deleteCategory(categoryID) {
    return this.httpClient.delete(this.url + 'admin/categories/' + categoryID)
  }

  public updateActivity(activityID, activityprops) {
    return this.httpClient.put(this.url + 'admin/activities/' + activityID, activityprops)
  }

  public addActivity(activityprops) {
    return this.httpClient.post(this.url + 'admin/activities/', activityprops)
  }

  public deleteActivity(activityID): Observable<object> {
    console.log(this.url +'activity'+ activityID);
    
    return this.httpClient.delete(this.url +'admin/activities/'+ activityID)
  }
}
