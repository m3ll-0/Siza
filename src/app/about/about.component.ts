import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: '../../../MAP_MARCO/wie_zijn_wij/about.component.html',
  styleUrls: ['../../../MAP_MARCO/wie_zijn_wij/about.component.css']
})
export class AboutComponent implements OnInit {
 

  page='about';
  title='Grote dromen beginnen klein'

  constructor() {}

  ngOnInit() {
   
  }

}
