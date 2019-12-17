import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Category } from '../../models/Category';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-sizasports-subcategory',
  templateUrl: './sizasports-subcategory.component.html',
  styleUrls: ['./sizasports-subcategory.component.css']
})
export class SizasportsSubcategoryComponent implements OnInit {

  categories : Category[];
  activities: Activity[];
  private categoryId: string;

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService, private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
   }

  ngOnInit(  ) {
    this.categoryId = this.route.snapshot.paramMap.get('id')

    if(this.categoryId !== undefined)
    {
      this.apiService.getCategoriesById(this.categoryId).subscribe((data) =>{
        this.categories = data['subcategories'];
      });
    }

    this.apiService.getActivitiesById(this.categoryId).subscribe((data) =>{
      this.activities = data['activities'];
    });

    // Load categories    

    // Load activities
  }

}
