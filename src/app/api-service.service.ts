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

  public getSpecificActivity(categoryID){
    return this.httpClient.get('https://siza-api.herokuapp.com/v1/activities/' + categoryID);
  }


  constructor(private httpClient: HttpClient) {
    
   }
}
