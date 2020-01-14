import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-admin-activity-card',
  templateUrl: './admin-activity-card.component.html',
  styleUrls: ['./admin-activity-card.component.css']
})
export class AdminActivityCardComponent implements OnInit {

  @Input() activity: Activity
  public activityID: string;
  public isDeleted = false;

  constructor(private router: Router, private apiService: ApiServiceService) { }

  ngOnInit() {
    if(this.activity !== null && this.activity !== undefined) {
      this.activityID = this.activity._id;
    }
  }

  onEditActivity() {
    this.router.navigate(['/admin/activities/', this.activityID]);
  }

  onClickActivityCard(activityID: string) {
    this.router.navigate(['/activity', activityID])
  }

  OnDeleteActivity() {
    this.apiService.deleteActivity(this.activityID).subscribe((response) => {
      this.isDeleted = true;
    } )
  }

}
