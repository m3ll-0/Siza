import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-activityspecific',
  templateUrl: './admin-activityspecific.component.html',
  styleUrls: ['./admin-activityspecific.component.css']
})
export class AdminActivityspecificComponent implements OnInit {
  
  activities
 
  constructor(
    private apiService: ApiServiceService,
    private activatedRoute: ActivatedRoute 
    ) {

    var value
    this.activatedRoute.params.subscribe( params => value = params.id );
    this.apiService.getSpecificActivity(value).subscribe((data) =>{
      console.log(data);
      this.activities = data['activity']; 
    } )
  }

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
    }
  ngOnInit() {
  }

}
