import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  url = 'https://siza-api.herokuapp.com/v1/'

  constructor(private httpClient: HttpClient) {
    
  } 

  public getCategories(){
    return this.httpClient.get(this.url + 'categories');
  }

  public getActivities(){
    return this.httpClient.get(this.url + 'activities');
  }

  public getCategoriesById(parentId: string)
  {
    return this.httpClient.get(this.url + 'categories/' + parentId );
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
}
