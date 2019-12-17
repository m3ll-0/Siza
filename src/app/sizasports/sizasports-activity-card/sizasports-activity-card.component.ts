import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-sizasports-activity-card',
  templateUrl: './sizasports-activity-card.component.html',
  styleUrls: ['./sizasports-activity-card.component.css']
})
export class SizasportsActivityCardComponent implements OnInit {

  @Input() activity: Activity
  public categoryID : string;

  constructor() { }

  ngOnInit() {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXx");
    console.log(this.activity);

  }

}
