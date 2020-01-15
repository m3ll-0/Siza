import { Component, OnInit, ViewChild, ElementRef, SystemJsNgModuleLoader } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { debug } from 'util';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss']
})
export class AdminCategoryEditComponent implements OnInit {
  @ViewChild('categoryImage', {static: false}) categoryImage: ElementRef

  selectedFile: File
  creationMode = true;
  parentcategories: Category[];
  headerTitle: string;
  categoryId: string;

  form: FormGroup;

  formName: string;
  formImage: string;
  formParent: string;

  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
    ) { 
    }

  ngOnInit() {
    this.apiService.getCategoriesParentName().subscribe((data: any) => {
      if(data !== null && data !== undefined) {

        // Bug fix: remove it's own element
        for (let i = 0; i < data.categories.length; i++) {
          const obj = data.categories[i];
      
          if(obj._id === categoryId) {
            data.categories.splice(i, 1);
          }
        }

        console.error(data.categories);

        data.categories.unshift({
          _id: '0',
          name: 'Geen'
        });
        
        this.parentcategories = data.categories;
      }
    })
    this.form = this.formBuilder.group({
      name: '',
      categoryImage: '',
      parent: ''
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
            this.formParent = category.parent._id;
          } else {
            this.formParent = '0';
          }

          this.formImage = category.image;
          this.formName = category.name;
        }
      })
    } else {
      this.formParent = '0';
    }
  }

  onGoBack() {
    this.location.back();
  }

  onSaveCategory() {
      const imageblob = this.categoryImage.nativeElement.files[0]
      const categoryParams = new FormData()
      
      const name = 'name'
      const parent = 'parent'

      if(imageblob !== undefined && imageblob !== null) {
        categoryParams.append('categoryImage', imageblob)
      }
      categoryParams.append('name', this.formName)

      if(this.form.controls[parent].value !== null && this.form.controls[parent].value !== undefined 
        && this.form.controls[parent].value !== '0') {
        
          categoryParams.append('parent', this.form.controls[parent].value)
      }

      if(this.creationMode) {
        // Save category
        this.apiService.createCategory(categoryParams)
        .subscribe(data => {
          this.router.navigate(['/admin/categories'])
        })
      } else {
      
        this.apiService.updateSpecificCategory(this.categoryId, categoryParams)
        .subscribe(data => {
          this.router.navigate(['/admin/categories'])
        })
      }
    }
}
