import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-activity-card',
  templateUrl: './admin-activity-card.component.html',
  styleUrls: ['./admin-activity-card.component.css']
})
export class AdminActivityCardComponent implements OnInit {

  @Input() activity: Activity
  public activityID : string;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.activity !== null && this.activity !== undefined)
    {
      this.activityID = this.activity._id;
    }
  }

  onClickActivityCard(activityID: string)
  {
    this.router.navigate(['/activity', activityID])
  }

}
