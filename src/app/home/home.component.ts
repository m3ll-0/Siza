import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../../../MAP_MARCO/home/home.component.html',
  styleUrls: ['../../../MAP_MARCO/home/home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Je eerste stap zet je in beweging";

  constructor() { }

  ngOnInit() {
  }

}
