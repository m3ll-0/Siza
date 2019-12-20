import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-user-overview',
  templateUrl: './admin-user-overview.component.html',
  styleUrls: ['./admin-user-overview.component.css']
})
export class AdminUserOverviewComponent implements OnInit {
  users: [User]
  admins: [User]
  error: string;
  displayedColumns: string[] = ['email', 'isAdmin'];
  panelOpenState = false;

  constructor( private adminService: AdminService) {
    this.loadData();
   }

  ngOnInit() {
  }

  loadData() {
    this.adminService.getUsers().subscribe(
      (data) =>{
        this.users = data['users'];
      }
    )
    this.adminService.getAdmins().subscribe(
      (data) =>{
        this.admins = data['admins'];
      }
    )
  }

  setAdmin(user, checked){
    this.adminService.setAdmin(user._id, checked).subscribe(
      resData => {
        this.loadData();
      },
      errorMessage => {
        this.error = errorMessage
        this.loadData();
        setTimeout(() => {
          this.error = null
        }, 5000);
      });
  }

  print(e){
    console.log('print')
    console.log(e)
  }

}
