import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-category-card',
  templateUrl: './admin-category-card.component.html',
  styleUrls: ['./admin-category-card.component.css']
})
export class AdminCategoryCardComponent implements OnInit {

  @Input() name: string
  isRoot = false;

  constructor() { }

  ngOnInit() {
    if(this.name == 'root')
    {
      this.isRoot = true;
    }
  }

}
