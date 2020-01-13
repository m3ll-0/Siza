import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-admin-category-card',
  templateUrl: './admin-category-card.component.html',
  styleUrls: ['./admin-category-card.component.css']
})
export class AdminCategoryCardComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;

  isRoot = false;
  isDeleted = false;

  constructor(private router: Router, private apiService: ApiServiceService) { 
  }

  onEditCategory(id: string) {
    this.router.navigate(['/admin/editCategory', { categoryId: id }])
  }

  onDeleteCategory() {
    this.apiService.deleteCategory(this.id).subscribe((data) => {
      this.isDeleted = true;
    })
  }

  ngOnInit() {
    if(this.name === 'root') {
      this.isRoot = true;
    }
  }
}
