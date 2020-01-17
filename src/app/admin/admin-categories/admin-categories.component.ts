import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { Category } from 'src/app/models/Category';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-node',
  template: `

  <app-admin-category-card [id]='node._id' [name]='node.name'></app-admin-category-card>

  <ul class='tree-group'>
    <div class='tree-item' *ngFor="let node of node.children">
      <app-tree-node [node]="node"></app-tree-node>
    </div>
  </ul>
`
})
export class TreeNodeComponent {
  @Input() node: any;
}


@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})

export class AdminCategoriesComponent implements OnInit {

  categories: any

  constructor(private apiService: ApiServiceService, private router: Router) { 
  }

  isLoading = true;
  node: any;

  onNewCategory() {
    this.router.navigate(['/admin/editCategory']);
  }

  buildTree(categories: any): any {

    const categoryTree = [];
    const leftOverCategories = [];

    for(const index in categories) {

      if(categories.hasOwnProperty(index)) {
        const currentCategory: Category = categories[index];

        if(! Object.prototype.hasOwnProperty.call(currentCategory, 'parent')) {
          categoryTree.push(currentCategory);
        } else {
          leftOverCategories.push(currentCategory);
        }      }
    }

    while(leftOverCategories.length > 0) {
      // Find item in array with parent id
      for(const index in leftOverCategories) {

        if(leftOverCategories.hasOwnProperty(index)) {
          const leftOverCategory = leftOverCategories[index];

          // Find child recursively
          const parentMatch = this.findNode(leftOverCategory.parent, categoryTree);
  
          if(parentMatch !== undefined) {
            // Add child to parent as child
            // Remove child from leftOverArray
  
            if(! Object.prototype.hasOwnProperty.call(parentMatch, 'children')) {
                parentMatch.children = [];
                parentMatch.children.push(leftOverCategory);
            } else {
              parentMatch.children.push(leftOverCategory);
            }
  
            leftOverCategories.splice(+index, 1);
          }
        }
      }
    }

    return categoryTree;
  }

  findNode(id, array) {

    for (const node of array) {

      if (node._id === id) {
        return node;
      } 

      if (node.children) {
        const child = this.findNode(id, node.children);
        if (child) {
          return child;
        } 
      }
    }
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe( (data: any) => {

      const categoryTree = this.buildTree(data.categories);
      this.node = {
        name: 'root',
        children : categoryTree
      }
      this.isLoading = false;
    })
  }
}
