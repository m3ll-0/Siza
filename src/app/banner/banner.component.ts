import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() title: String
  @Input() page: String

  constructor() { }

  ngOnInit() {
    // console.error(this.title)
    // console.error(this.page)
 
  }

}
