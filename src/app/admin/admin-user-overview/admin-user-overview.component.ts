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
  displayedColumns: string[] = ['email', 'isAdmin'];

  constructor( private adminService: AdminService) {
    adminService.getUsers().subscribe(
      (data) =>{
        console.log(data);
        this.users = data['users'];
      }
    )
    adminService.getAdmins().subscribe(
      (data) =>{
        console.log(data);
        this.admins = data['admins'];
      }
    )
   }

  ngOnInit() {
  }

  setAdmin(user){
    console.log(!user.isAdmin)
    console.log(user._id)
    this.adminService.setAdmin(user._id, !user.isAdmin)
  }

}
