import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css',
]
})

export class ActivitiesComponent implements OnInit {


  
  activities

  constructor(private apiService: ApiServiceService) {
    this.apiService.getActivities().subscribe((data) =>{
      console.log(data);
      this.activities = data['activities'];
    } )
  }

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
    }

ngOnInit() {
}

}
