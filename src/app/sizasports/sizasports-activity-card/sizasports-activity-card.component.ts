import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-sizasports-activity-card',
  templateUrl: './sizasports-activity-card.component.html',
  styleUrls: ['./sizasports-activity-card.component.css']
})
export class SizasportsActivityCardComponent implements OnInit {

  @Input() activity: Activity
  public activityID : string;

  constructor() { }

  ngOnInit() {
    this.activityID = this.activity._id;
  }

}
