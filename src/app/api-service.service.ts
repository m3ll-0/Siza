import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public getCategories(){
    return this.httpClient.get('https://siza-api.herokuapp.com/v1/categories');
  }

  public getActivities(){
    return this.httpClient.get('https://siza-api.herokuapp.com/v1/activities');
  }

  public getCategoriesById(parentId: string)
  {
    return this.httpClient.get('https://siza-api.herokuapp.com/v1/categories/' + parentId );
  }

  public getActivitiesById(categoryId: string)
  {
    return this.httpClient.get('https://siza-api.herokuapp.com/v1/activities/category/' + categoryId );
  }
  
  constructor(private httpClient: HttpClient) {
    
   }
}
