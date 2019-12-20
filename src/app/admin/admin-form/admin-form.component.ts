import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Suggestion } from 'src/app/models/Suggestion';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit, AfterViewInit {
  suggestions = []
  isLoading = true
  error: string;
  sort: MatSort
  displayedColumns: string[] = ['user', 'message', 'read', 'onclick'];

  

  constructor( private adminService: AdminService, private router: Router, private apiService: ApiServiceService, ) {
    this.loadData();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }


  loadData() {
    this.adminService.getSuggestions().subscribe(
      (data) =>{
        var suggestionsData = []
        const length = data['suggestions'].length
        data['suggestions'].forEach(element => {
          this.apiService.getUserById(element.userId).subscribe(
            data => {
              suggestionsData.push({usersEmail: data['user']['email'], suggestion: element})
              if (suggestionsData.length === length){
                this.suggestions = suggestionsData
                this.isLoading = false
              }              
            }
          )
        });
        
      }
    )
  }


  goToDetail(element){
    this.router.navigate([`/suggestions/${element.suggestion._id}`])
  }

}
