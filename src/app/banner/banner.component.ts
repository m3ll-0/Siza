import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() title: string
  @Input() page: string

  constructor() { }

  ngOnInit() {
    console.error(this.title)
    console.error(this.page)
 
  }

}
