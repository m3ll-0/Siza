import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beweegposter',
  templateUrl: './beweegposter.component.html',
  styleUrls: ['./beweegposter.component.css']
})
export class BeweegposterComponent implements OnInit {
  title = 'Iedere dag is mooi'
  page = 'beweegposter'

  constructor() { }

  ngOnInit() {
  }

}
