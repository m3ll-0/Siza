import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.css']
})
export class AdminActivityComponent implements OnInit {

  activities
  
  constructor(
    private apiService: ApiServiceService
    ) { 
    
    this.apiService.getActivities().subscribe((data) =>{
      this.activities = data['activities'];
    } )
  }

  deleteActivity(activityID) {
    this.apiService.deleteActivity(activityID).subscribe((response) => {
      this.apiService.getActivities().subscribe((data) =>{
        this.activities = data['activities'];
      } )
    console.log("deleted" + activityID)})
  }
  addActivity() {

    console.log("AddActivity")
  }
  
  ngOnInit() {
    
  }


}
