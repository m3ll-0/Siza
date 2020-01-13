import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit {

  creationMode = true;
  parentcategories: Category[];
  headerTitle: string;
  categoryId: string;

  formName: string;
  formImage: string;
  formParent: string;

  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) { 
    }

  ngOnInit() {
    this.apiService.getCategoriesParentName().subscribe((data: any) => {
      if(data !== null && data !== undefined) {
        this.parentcategories = data.categories;
      }
    })
    
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.headerTitle = ' aanmaken';

    if (categoryId !== null) {
      this.creationMode = false
      this.categoryId = categoryId;
      this.headerTitle = ' bewerken';

      // load data
      this.apiService.getSpecificCategoryParentName(categoryId).subscribe((data: any) => {
        
        if(data !== null && data !== undefined) {
          const category = data.category;

          if(Object.prototype.hasOwnProperty.call(category, 'parent')) {
            this.formParent = category.parent._id
          }

          this.formImage = category.image;
          this.formName = category.name;
        }
      })
    }
  }

  onGoBack() {
    this.location.back();
  }

  onSaveCategory(form: NgForm) {
      const value = form.value;
      
      const categoryParams = {
          name: value.Name,
          image: value.Image,
          parent: value.parent
        }      

      if(this.creationMode) {
        // Save category
        this.apiService.createCategory(categoryParams).subscribe(data => {
          this.router.navigate(['/admin/categories'])
        })
      } else {
        // Update category
        this.apiService.updateSpecificCategory(this.categoryId, categoryParams)
        .subscribe((data) => {
          this.router.navigate(['/admin/categories'])
        })
      }
    }
}
