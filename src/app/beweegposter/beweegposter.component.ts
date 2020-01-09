import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beweegposter',
  templateUrl: './beweegposter.component.html',
  styleUrls: ['./beweegposter.component.css']
})
export class BeweegposterComponent implements OnInit {
  title = "Beweegposter"
  page = 'Als je goed kijkt kun je iedere dag iets moois zien'

  constructor() { }

  ngOnInit() {
  }

}
