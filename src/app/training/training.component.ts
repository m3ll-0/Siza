import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  page='baf';
  title='Een doel zonder plan is slechts een wens';

  ngOnInit() {
  }

}
