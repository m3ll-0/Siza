import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.css']
})
export class AdminActivityComponent implements OnInit {


  activities
  

  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute 
    ) { 
    
    var value 
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getActivitiesFromCategory(value).subscribe((data) =>{
      this.activities = data['activities'];
 
    } )
  }

  ngOnInit() {
    
  }


}
