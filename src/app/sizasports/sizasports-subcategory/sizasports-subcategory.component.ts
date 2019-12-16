import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService) {
    
    this.apiService.getCategories().subscribe((data) =>{
      this.categories = data['categories'];
    });

    this.apiService.getCategories().subscribe((data) =>{
      this.activities = data['activities'];
    });
   }

  ngOnInit(  ) {
    const topicId = this.route.snapshot.paramMap.get('id')
    // Load categories

    // Load activities
  }

}
