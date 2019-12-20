import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-activityedit',
  templateUrl: './admin-activityedit.component.html',
  styleUrls: ['./admin-activityedit.component.css']
})
export class AdminActivityeditComponent implements OnInit {
  activities
  entities = [
    { id: 1, name: 'Netanel Basal', isAdmin: true },
    { id: 2, name: 'John Due', isAdmin: false },
  ]

  controls: FormArray;

  name:string = 'Hello';

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

  sampleClick(){
    console.log('clicked!!');
  }

  opstelling: string = 'Aandachtspunten';

  pictNotLoading(event) {
     this.opstelling = '';
  }

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        name: new FormControl(entity.name, Validators.required),
        isAdmin: new FormControl(entity.isAdmin)
      });
    });
    this.controls = new FormArray(toGroups);
  }
}
