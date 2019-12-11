import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'

@Component({
  selector: 'app-sizasports',
  templateUrl: './sizasports.component.html',
  styleUrls: ['./sizasports.component.css']
})
export class SizasportsComponent implements OnInit {
  activities;
  categories;

  constructor(private apiService: ApiServiceService) {
    this.apiService.getActivities().subscribe((data) =>{
      console.log(data);
      this.activities = data['activities'];
    } )
    this.apiService.getCategories().subscribe((data) =>{
      console.log(data);
      this.categories = data['categories'];
    } )
   }

  ngOnInit() {
  }

}
