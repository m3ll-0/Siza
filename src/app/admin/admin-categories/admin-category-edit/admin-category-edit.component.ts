import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit {

  creationMode: boolean;
  categories: Category[];

  formName: string;
  formImage: string;
  formParent: string;

  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute
    ) 
    { 
    }

  ngOnInit() {
    this.apiService.getCategories().subscribe((data : any) => {
      this.categories = data.categories;

      console.error(this.categories)
    })
    
    const categoryId = this.route.snapshot.paramMap.get('categoryId')

    alert(categoryId);

    if (categoryId !== null) {
      this.creationMode = false

      // load data
      this.apiService.getSpecificCategory(categoryId).subscribe((data : any) => {
        
        const category = data.category;

        this.formImage = category.image;
        this.formName = category.name;
        this.formParent = category.parent;

      })



    }
  }

}
