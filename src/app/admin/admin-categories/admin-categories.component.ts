import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { Category } from 'src/app/models/Category';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'tree-node',
  template: `

  <app-admin-category-card [id]='node._id' [name]='node.name'></app-admin-category-card>

  <ul class='tree-group'>
    <div class='tree-item' *ngFor="let node of node.children">
      <tree-node [node]="node"></tree-node>
    </div>
  </ul>
`
})
export class TreeNode {
  @Input() node : any;
}


@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})

export class AdminCategoriesComponent implements OnInit {

  categories: any

  constructor(private apiService : ApiServiceService) { 
  }

  isLoading = true;
  node : any;

  buildTree(categories : any) : any
  {

    let categoryTree = [];
    let leftOverCategories = [];

    for(let index in categories)
    {
      let currentCategory : Category = categories[index];

      if(! Object.prototype.hasOwnProperty.call(currentCategory, "parent"))
      {
        categoryTree.push(currentCategory);
      }
      else{
        leftOverCategories.push(currentCategory);
      }
    }

    while(leftOverCategories.length > 0)
    {
      // Find item in array with parent id
      for(let index in leftOverCategories)
      {

        let leftOverCategory = leftOverCategories[index];

        // Find child recursively
        let parentMatch = this.findNode(leftOverCategory.parent, categoryTree);

        if(parentMatch !== undefined)
        {
          // Add child to parent as child
          // Remove child from leftOverArray

          if(! Object.prototype.hasOwnProperty.call(parentMatch, "children"))
          {
              parentMatch.children = [];
              parentMatch.children.push(leftOverCategory);
          }
          else
          {
            parentMatch.children.push(leftOverCategory);
          }

          leftOverCategories.splice(+index, 1);
        }
        else{
        }
      }
    }

    return categoryTree;
  }

  findNode (_id, array) {

    for (const node of array) {

      if (node._id === _id) return node;

      if (node.children) {

        const child = this.findNode(_id, node.children);
        if (child) return child;
      }
    }
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe( (data : any) => {

      let categoryTree = this.buildTree(data.categories);
      this.node = {
        name: 'root',
        children : categoryTree
      }
      this.isLoading = false;
    })
  }

}
