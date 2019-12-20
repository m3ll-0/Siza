import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-category-card',
  templateUrl: './admin-category-card.component.html',
  styleUrls: ['./admin-category-card.component.css']
})
export class AdminCategoryCardComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;

  isRoot = false;

  constructor(private router: Router) { 
  }

  onEditCategory(id: string)
  {
    this.router.navigate(['/admin/editCategory', { categoryId: id }])
  }

  ngOnInit() {
    if(this.name == 'root')
    {
      this.isRoot = true;
    }
  }

}
