import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Category } from '../../models/Category';
import { Activity } from 'src/app/models/Activity';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sizasports-subcategory',
  templateUrl: './sizasports-subcategory.component.html',
  styleUrls: ['./sizasports-subcategory.component.css']
})
export class SizasportsSubcategoryComponent implements OnInit {

  categories : Category[] = [];
  activities: Activity[] = [];
  private categoryId: string;
  isLoadingCategories = true;
  isLoadingActivities = true;
  wheelchair : Boolean = false
  minDuration : Number
  maxDuration : Number
  minAmountOfPeople : Number
  maxAmountOfPeople : Number

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService, private router: Router, private location: Location) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
   }

  onGoBack()
   {
      this.location.back();
   }

  ngOnInit(  ) {
    this.categoryId = this.route.snapshot.paramMap.get('id')

    if(this.categoryId !== undefined)
    {
      this.apiService.getCategoriesById(this.categoryId).subscribe((data) =>{
        this.categories = data['subcategories'];
        this.isLoadingCategories = false;
      });

      this.getActivities()
    }

  }

  setWheelchair(bool : Boolean){
    this.wheelchair = bool
    this.getActivities()
  }

  setDuration(duration){
    console.log("setDuration")
    this.minDuration = duration
    this.maxDuration = duration

    this.getActivities()
  }

  setAmountOfPeople(min, max){
    console.log("setAmountOfPeople")
    this.minAmountOfPeople = min
    this.maxAmountOfPeople = max
    
    this.getActivities()
  }

  getActivities(){
    this.isLoadingActivities = true
    this.apiService.getActivitiesFromCategoryFiltered(this.categoryId, this.wheelchair, this.minDuration, this.maxDuration, this.minAmountOfPeople, this.maxAmountOfPeople).subscribe((data) =>{
      this.activities = data['activities'];
      this.isLoadingActivities = false;
    });
  }


  goToCreateSuggestion()
  {
    console.log('goToCreateSuggestion')
    this.router.navigate(['/suggestions/create'])
  }

}
