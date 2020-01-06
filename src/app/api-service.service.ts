import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Suggestion } from './models/Suggestion';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  url = 'https://siza-api.herokuapp.com/v1/'
  private API_SUGGESTIONS = 'suggestions'
  private API_AUTH = 'auth'
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
    return this.httpClient.get<Suggestion>(`${this.url}${this.API_AUTH}/${id}`)

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

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.error.msg)
  }
  
  public getCategoriesRecursively()
  {
    return this.httpClient.get(this.url + 'categories/recursively')
  }

  public getCategoriesWithoutParent()
  {
    return this.httpClient.get(this.url + 'categories/noParent')
  }

  public getSpecificCategory(categoryID)
  {
    return this.httpClient.get(this.url + 'categories/' + categoryID)
  }

  public getSpecificCategoryParentName(categoryID)
  {
    return this.httpClient.get(this.url + 'categories/getParentName/' + categoryID)
  }

  public getCategoriesParentName()
  {
    return this.httpClient.get(this.url + 'categories/getParentName')
  }

  public updateSpecificCategory(categoryID, categoryprops)
  {
    return this.httpClient.put(this.url + 'categories/' + categoryID, categoryprops)
  }

  public createCategory(categoryprops)
  {
    return this.httpClient.post(this.url + 'categories', categoryprops)
  }

  public deleteCategory(categoryID)
  {
    return this.httpClient.delete(this.url + 'categories/' + categoryID)
  }

  
  // public editActivity(categoryID){
  //   return this.httpClient.put(this.url +'activities/' + categoryID);
  // }

  public deleteActivity(activityID): Observable<Object> {
    console.log(this.url +'activity'+ activityID);
    
    return this.httpClient.delete(this.url +'admin/activities/'+ activityID).pipe(map((response: Response) => response.json()))
    
}


}
