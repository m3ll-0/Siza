import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.css']
})
export class AdminActivityComponent implements OnInit {

  activities
  isLoading = true;
  
  constructor(
    private apiService: ApiServiceService
    ) { 
    
    this.apiService.getActivities().subscribe((data) => {
      const key = 'activities';
      this.activities = data[key];
      this.isLoading = false;
    } )
  }

  deleteActivity(activityID) {
    this.apiService.deleteActivity(activityID).subscribe((response) => {
      this.apiService.getActivities().subscribe((data) => {
        const key = 'activities';
        this.activities = data[key];
      } )
    } )
  }
  
  ngOnInit() {
    
  }


}
