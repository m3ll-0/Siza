import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beweegposter',
  templateUrl: '../../../MAP_MARCO/beweegposter/beweegposter.component.html',
  styleUrls: ['../../../MAP_MARCO/beweegposter/beweegposter.component.css']
})
export class BeweegposterComponent implements OnInit {
  title = "Iedere dag is mooi"
  page = 'beweegposter'

  constructor() { }

  ngOnInit() {
  }

}
