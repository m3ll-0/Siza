import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import { Category } from '../models/Category';

@Component({
  selector: 'app-sizasports',
  templateUrl: './sizasports.component.html',
  styleUrls: ['./sizasports.component.css']
})
export class SizasportsComponent implements OnInit {
  categories : Category[];
  isLoading = true;

  constructor(private apiService: ApiServiceService) {
    this.apiService.getCategories().subscribe((data) =>{
      this.categories = data['categories'];
      this.isLoading = false;
    } )
   }

  ngOnInit() {
  }

}
