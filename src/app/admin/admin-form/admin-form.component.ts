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
  options = ['Gelezen en ongelezen', 'Gelezen', 'Ongelezen']
  all = []
  suggestions = []
  read: string
  isLoading = true
  error: string;
  sort: MatSort
  displayedColumns: string[] = ['user', 'message', 'read', 'onclick'];

  constructor( private adminService: AdminService, private router: Router, private apiService: ApiServiceService, ) {
    this.loadData();
    this.read = this.options[0]
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  loadData() {
    this.adminService.getSuggestions().subscribe(
      (data) => {

        if(data !== null && data !== undefined) {
          const suggestionsData = []
          const suggestionsKey = 'suggestions'
          const userKey = 'user'
          const emailKey = 'email'


          const length = data[suggestionsKey].length

          data[suggestionsKey].forEach(element => {
            this.apiService.getUserById(element.userId).subscribe(
              odata => {
                suggestionsData.push({usersEmail: odata[userKey][emailKey], suggestion: element})
                if (suggestionsData.length === length) {
                  this.suggestions = suggestionsData
                  this.all = suggestionsData
                  this.isLoading = false
                }              
              }
            )
          });          
        }
      }
    )
  }

  filter(read) {
    this.read = this.options[read]
    if (read === 0) {
      this.suggestions = this.all
    }
    if (read === 1) {
      this.suggestions = this.all.filter((element) => {
        return element.suggestion.read === true
      })
    }
    if (read === 2) {
      this.suggestions = this.all.filter((element) => {
        return element.suggestion.read === false
      })
    }
  }

  setRead(element, bool: boolean) {
    this.adminService.setRead(element.suggestion._id, bool).subscribe(
      data => {
        console.log(data)
      },
      errorMessage => {
        this.error = errorMessage
        setTimeout(() => {
          this.error = null
        }, 5000);
      }
    )
  }

  goToDetail(element) {
    this.setRead(element, true)
    this.router.navigate([`/suggestions/${element.suggestion._id}`])
  }

}
