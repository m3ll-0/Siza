import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beweegposter',
  templateUrl: '../../../MAP_MARCO/beweegposter/beweegposter.component.html',
  styleUrls: ['../../../MAP_MARCO/beweegposter/beweegposter.component.css']
})
export class BeweegposterComponent implements OnInit {
  title = 'Maak je dromen waar'
  page = 'beweegposter'
  kennisplein= 'https://www.kennispleingehandicaptensector.nl/gezondheid/'+
  'meer-bewegen-methode-dromen-ontdekken-doen-oiv?origin=29892'
  beweegposter= 'https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/2018/Beweegposter_A4_HQ.pdf'
  planner='https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/2018/Weekplanner_A4_picto.pdf'

  handreiking='https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/'
  +'2018/20171204%20NK%20aangepaste%20handreiking%20groep.pdf'

  ambulant='https://www.kennispleingehandicaptensector.nl/images/KNP/images/Nieuws/2018/20171204%20NK%20aan'+
  'gepaste%20handreiking%20ambulant.pdf'

  constructor() { }

  ngOnInit() {
  }

}
