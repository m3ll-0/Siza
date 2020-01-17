import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: '../../../MAP_MARCO/training/training.component.html',
  styleUrls: ['../../../MAP_MARCO/training/training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  page='baf';
  title='Een doel zonder plan is slechts een wens';

  ngOnInit() {
  }

}
