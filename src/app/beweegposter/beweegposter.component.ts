import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beweegposter',
  templateUrl: './beweegposter.component.html',
  styleUrls: ['./beweegposter.component.css']
})
export class BeweegposterComponent implements OnInit {
  title = 'Iedere dag is mooi'
  page = 'beweegposter'
  kennisplein= 'https://www.kennispleingehandicaptensector.nl/gezondheid/'+
  'meer-bewegen-methode-dromen-ontdekken-doen-oiv?origin=29892'
  beweegposter= 'https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/2018/Beweegposter_A4_HQ.pdf'
  planner='https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/2018/Weekplanner_A4_picto.pdf'
  // tslint:disable-next-line:max-line-length
  handreiking='https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/'
  +'2018/20171204%20NK%20aangepaste%20handreiking%20groep.pdf'
  // tslint:disable-next-line:max-line-length
  ambulant='https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/2018/20171204%20NK%20aan'+
  'gepaste%20handreiking%20ambulant.pdf'

  constructor() { }

  ngOnInit() {
  }

}
