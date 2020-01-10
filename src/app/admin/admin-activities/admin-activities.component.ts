import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Category } from 'src/app/models/Category';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html',
  styleUrls: ['./admin-activities.component.css']
})
export class AdminActivitiesComponent implements OnInit {

  activities : Activity[];
  isLoading = true;

  constructor(private apiService: ApiServiceService) {
    this.apiService.getActivities().subscribe((data) =>{
      this.activities = data['activities'];
      this.isLoading = false;
    } )
   }
  ngOnInit() {
  }

}
