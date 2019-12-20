import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sizasports-activity-card',
  templateUrl: './sizasports-activity-card.component.html',
  styleUrls: ['./sizasports-activity-card.component.css']
})
export class SizasportsActivityCardComponent implements OnInit {

  @Input() activity: Activity
  public activityID : string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activityID = this.activity._id;
  }

  onClickActivityCard(activityID: string)
  {
    this.router.navigate(['/activities', activityID])
  }

}
