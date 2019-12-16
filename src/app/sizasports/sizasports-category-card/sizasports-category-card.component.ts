import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-sizasports-category-card',
  templateUrl: './sizasports-category-card.component.html',
  styleUrls: ['./sizasports-category-card.component.css']
})
export class SizasportsCategoryCardComponent implements OnInit {

  @Input() category: Category
  public categoryID : string;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.categoryID = this.category._id;
  }

  do(categoryID: string) {
    this.router.navigate(['/sizasports/category', categoryID])
  }

}
