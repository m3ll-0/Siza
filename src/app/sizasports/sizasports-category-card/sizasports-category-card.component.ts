import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-sizasports-category-card',
  templateUrl: './sizasports-category-card.component.html',
  styleUrls: ['./sizasports-category-card.component.css']
})
export class SizasportsCategoryCardComponent implements OnInit {

  @Input() category: Category

  constructor() { }

  ngOnInit() {
    console.log(this.category);
  }

}
