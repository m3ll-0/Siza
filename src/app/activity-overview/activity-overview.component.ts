import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {

  activities
  

  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute 
    ) { 
    console.log(value+'tt');
    
    var value 
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getActivitiesFromCategory(value).subscribe((data) =>{
      console.log(value+'tt');
      console.log(data);
      this.activities = data['activities'];
 
    } )
  }

  ngOnInit() {
    
  }

}
