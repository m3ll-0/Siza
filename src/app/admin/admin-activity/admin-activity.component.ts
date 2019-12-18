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

  addActivity(){

  }
  editActivity(){
    
  }
  deleteActivity(){

  }
  
  ngOnInit() {
    
  }


}
